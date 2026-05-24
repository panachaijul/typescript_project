function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_2 to make it ascending
  let c2 = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    c2.push(collection_2[i]);
  }

  // Merge three sorted arrays (all ascending now)
  const result: number[] = [];
  let i = 0, j = 0, k = 0;
  while (i < collection_1.length || j < c2.length || k < collection_3.length) {
    const vals = [
      i < collection_1.length ? collection_1[i] : Infinity,
      j < c2.length ? c2[j] : Infinity,
      k < collection_3.length ? collection_3[k] : Infinity,
    ];
    const min = Math.min(vals[0]!, vals[1]!, vals[2]!);
    if (min === vals[0]) {
      result.push(collection_1[i++]!);
    } else if (min === vals[1]) {
      result.push(c2[j++]!);
    } else {
      result.push(collection_3[k++]!);
    }
  }
  return result;
}

export = merge;