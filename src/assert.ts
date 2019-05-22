class AssertionError extends Error {}

export function assert(condition: any, message: string) {
  if (!condition) {
    throw new AssertionError(message || 'Assertion failed!');
  }
}
