import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn (class name utility)', () => {
  it('returns a single class unchanged', () => {
    expect(cn('text-red-500')).toBe('text-red-500');
  });

  it('merges multiple classes', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
  });

  it('resolves Tailwind conflicts — last value wins', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('filters out falsy values', () => {
    expect(cn('text-sm', false && 'hidden', null, undefined, 'font-bold')).toBe('text-sm font-bold');
  });

  it('handles conditional objects', () => {
    expect(cn({ 'bg-primary': true, 'bg-white': false })).toBe('bg-primary');
  });
});
