export function mean(xs) {
  if (xs.length === 0) return 0;
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

export function median(xs) {
  if (xs.length === 0) return 0;
  const sorted = [...xs].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[middle];
  return mean([sorted[middle - 1], sorted[middle]]);
}

export function variance(xs) {
  if (xs.length === 0) return 0;
  return mean(xs.map((x) => (x - mean(xs)) ** 2));
}

export function stddev(xs) {
  if (xs.length === 0) return 0;
  return Math.sqrt(variance(xs));
}
