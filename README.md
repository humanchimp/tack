# 📌 tack

tack is just a place to stick things that are needed cross-project. It is not meant to be a big/professional library like lodash. Instead, it contains useful utilities and algorithms we commonly need with boilerplate so we don't need to waste a bunch of time configuring rollup for each little module. Instead, the modules all house together in this package, and thanks to treeshaking, we can still load only what we need.

## api

### assert

```typescript
declare function assert(condition: any, message?: string): void;
```

Throw an assertion error with the given message if the condition is not true.

### findLast

```typescript
declare function findLast<T>(predicate: (it: T, index: number) => boolean, array: any[]): T;
```

Find the last item of an array that matches the predicate.

### head

```typescript
declare function head<T>(it: Iterable<T>): T;
```

Return the first item of an iterable.

### partition

```typescript
declare function partition<T>(predicate: (item: T, index: number) => boolean, array: T[]): [T[], T[]];
```

Split an array into two arrays, ones that respectively contain all the items matching and not matching the predicate.

### TopologicalSort 

```typescript
declare class TopologicalSort<T> {
    nodes: Set<T>;
    private edges;
    addEdge(source: T, target: T): void;
    sort(): T[];
    visit(node: T, list: T[], permanent: Set<T>, temporary: Set<T>): void;
}
```

## license

See [LICENSE](LICENSE)
