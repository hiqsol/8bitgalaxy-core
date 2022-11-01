import "mocha";
import { assert, expect } from "chai";

import Assert from "./../src/Model/Assert";

describe("Assert.ts", () => {
  it("should return the string", () => {
    const expected = "test string";
    const actual = Assert.string(expected);
    assert.equal(actual, expected);
  });
  it("should return the error with text", () => {
    const errorString = "test error string";
    expect(() => Assert.error(errorString)).to.throw(errorString);
  });
});
