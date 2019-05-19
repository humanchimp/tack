export function findLast<T>(
  array: any[],
  predicate: (it: T, index: number) => boolean,
): T {
  return array.reduceRight(
    (memo, item, index) => (predicate(item, index) ? memo || item : memo),
    undefined,
  );
}
