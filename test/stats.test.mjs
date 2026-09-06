import assert from "node:assert/strict";
import test from "node:test";
import { mean, median, range } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));

test("median of empty is 0", () => assert.equal(median([]), 0));
test("median of odd length", () => assert.equal(median([3, 1, 2]), 2));
test("median of even length", () => assert.equal(median([4, 1, 3, 2]), 2.5));

test("range of empty is 0", () => assert.equal(range([]), 0));
test("range of single element is 0", () => assert.equal(range([4]), 0));
test("range of unsorted values", () => assert.equal(range([4, 1, 3, 2]), 3));
