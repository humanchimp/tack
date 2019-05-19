export function findLast<T>(
  predicate: (it: T, index: number) => boolean,
  array: any[],
): T {
  return array.reduceRight(
    (memo, item, index) => (predicate(item, index) ? memo || item : memo),
    undefined,
  );
}
