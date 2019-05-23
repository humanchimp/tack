class AssertionError extends Error {}

export function assert(condition: any, message: string = 'Assertion failed!') {
  if (!condition) {
    throw new AssertionError(message);
  }
}
