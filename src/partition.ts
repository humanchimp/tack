export function partition<T>(
  predicate: (item: T, index: number) => boolean,
  collection: T[],
): [T[], T[]] {
  return collection.reduce(
    (memo, item, index) => {
      memo[predicate(item, index) ? 0 : 1].push(item);
      return memo;
    },
    [[], []],
  );
}
