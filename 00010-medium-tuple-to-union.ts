// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

// ============= Your Code Here =============
type TupleToUnion<T extends unknown[]> = T extends [infer X, ...infer Y]
  ? X | TupleToUnion<Y>
  : never;


type TupleToUnion2<T extends readonly any[]> = T[number]
