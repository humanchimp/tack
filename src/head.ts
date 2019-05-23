export function head<T>(it: Iterable<T>): T {
  for (const i of it) {
    return i;
  }
}
