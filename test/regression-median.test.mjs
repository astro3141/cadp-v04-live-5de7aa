import assert from "node:assert/strict";
import test from "node:test";
import { median } from "../src/stats.mjs";

test("median of [1,3,2] is 2", () => assert.equal(median([1, 3, 2]), 2));
test("median of [] is 0", () => assert.equal(median([]), 0));
