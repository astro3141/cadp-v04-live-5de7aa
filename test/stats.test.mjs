import assert from "node:assert/strict";
import test from "node:test";
import { mean } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));
