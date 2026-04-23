import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { logger } from '@/lib/logger';

beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

function lastCallArg(spy: ReturnType<typeof vi.spyOn>): unknown {
  return (spy as any).mock.calls.at(-1)?.[0];
}

function parsedEntry(spy: ReturnType<typeof vi.spyOn>) {
  return JSON.parse(lastCallArg(spy) as string);
}

describe('logger.info', () => {
  it('writes a JSON line to stdout with level=info', () => {
    logger.info('test message');
    expect(console.log).toHaveBeenCalledOnce();
    const entry = parsedEntry(vi.mocked(console.log));
    expect(entry.level).toBe('info');
    expect(entry.message).toBe('test message');
  });

  it('includes context properties in the output', () => {
    logger.info('user.login', { userId: 42, ip: '1.2.3.4' });
    const entry = parsedEntry(vi.mocked(console.log));
    expect(entry.userId).toBe(42);
    expect(entry.ip).toBe('1.2.3.4');
  });

  it('includes a valid ISO timestamp', () => {
    logger.info('ts test');
    const entry = parsedEntry(vi.mocked(console.log));
    expect(new Date(entry.timestamp).toISOString()).toBe(entry.timestamp);
  });
});

describe('logger.warn', () => {
  it('writes to console.warn with level=warn', () => {
    logger.warn('rate limit hit', { ip: '5.5.5.5' });
    expect(console.warn).toHaveBeenCalledOnce();
    const entry = parsedEntry(vi.mocked(console.warn));
    expect(entry.level).toBe('warn');
    expect(entry.ip).toBe('5.5.5.5');
  });
});

describe('logger.error', () => {
  it('writes to console.error with level=error', () => {
    logger.error('smtp failed', { error: 'connection refused' });
    expect(console.error).toHaveBeenCalledOnce();
    const entry = parsedEntry(vi.mocked(console.error));
    expect(entry.level).toBe('error');
    expect(entry.error).toBe('connection refused');
  });
});

describe('logger.debug', () => {
  it('suppresses output in production', () => {
    vi.stubEnv('NODE_ENV', 'production');
    logger.debug('hidden in prod');
    expect(console.log).not.toHaveBeenCalled();
    vi.unstubAllEnvs();
  });

  it('outputs in non-production environments', () => {
    // NODE_ENV is 'test' in vitest by default
    logger.debug('visible in test');
    expect(console.log).toHaveBeenCalledOnce();
    const entry = parsedEntry(vi.mocked(console.log));
    expect(entry.level).toBe('debug');
  });
});
