type Level = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  [key: string]: unknown;
}

function write(level: Level, message: string, context: LogContext = {}): void {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
  };
  const line = JSON.stringify(entry);
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

export const logger = {
  debug(message: string, context?: LogContext): void {
    if (process.env.NODE_ENV !== 'production') write('debug', message, context);
  },
  info(message: string, context?: LogContext): void {
    write('info', message, context);
  },
  warn(message: string, context?: LogContext): void {
    write('warn', message, context);
  },
  error(message: string, context?: LogContext): void {
    write('error', message, context);
  },
};
