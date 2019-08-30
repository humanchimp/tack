export function findLast<T>(
  predicate: (it: T, index: number) => boolean,
  array: any[],
): T {
  for (let index = array.length - 1; index >= 0; index--) {
    const item = array[index];

    if (predicate(item, index)) {
      return item;
    }
  }
}
