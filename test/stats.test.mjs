import assert from "node:assert/strict";
import test from "node:test";
import { mean, median, variance, stddev } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));

test("median of empty is 0", () => assert.equal(median([]), 0));
test("median of odd length", () => assert.equal(median([3, 1, 2]), 2));
test("median of even length", () => assert.equal(median([4, 1, 3, 2]), 2.5));

test("variance of empty is 0", () => assert.equal(variance([]), 0));
test("variance averages squared deviations", () =>
  assert.equal(variance([2, 4, 4, 4, 5, 5, 7, 9]), 4));

test("stddev of empty is 0", () => assert.equal(stddev([]), 0));
test("stddev is the square root of variance", () =>
  assert.equal(stddev([2, 4, 4, 4, 5, 5, 7, 9]), 2));
