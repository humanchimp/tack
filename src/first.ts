export function first<T>(iter: Iterable<T>): T {
  for (const v of iter) {
    return v;
  }
}
