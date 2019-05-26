export function getAt<T, F = T>(path: string[], target: T): F {
  return path.reduce((node, edge) => node[edge], target);
}
