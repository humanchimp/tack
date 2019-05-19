export function partition<T>(
  predicate: (item: T, index: number) => boolean,
  array: T[],
): [T[], T[]] {
  return array.reduce(
    (memo, item, index) => {
      memo[predicate(item, index) ? 0 : 1].push(item);
      return memo;
    },
    [[], []],
  );
}
