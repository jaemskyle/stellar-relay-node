// lib/logger.js
const isDevelopment = process.env.NODE_ENV === 'development';
const isDebug = process.env.DEBUG === 'true';

export const logger = {
  log: (...args) => isDevelopment && console.log(...args),
  debug: (...args) => isDevelopment && isDebug && console.debug(...args),
  warn: (...args) => isDevelopment && console.warn(...args),
  error: (...args) => isDevelopment && console.error(...args),
  info: (...args) => isDevelopment && console.info(...args),
};
