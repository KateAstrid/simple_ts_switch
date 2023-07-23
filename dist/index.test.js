"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("processWithSwitch", () => {
    it("should return correct value when case matches and no continue cases", () => {
        const result = (0, _1.simpleSwitch)("apple", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown");
        expect(result).toEqual("red");
    });
    it("should return default value when case does not match", () => {
        const result = (0, _1.simpleSwitch)("orange", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown");
        expect(result).toEqual("unknown");
    });
    it("should return default value when continue cases and default value are passed and fallthrough happens", () => {
        const result = (0, _1.simpleSwitch)("apple", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown", ["apple", "banana", "grape"]);
        expect(result).toEqual("unknown");
    });
    it("should return undefined when default value is undefined and continue cases are passed and fallthrough happens", () => {
        const result = (0, _1.simpleSwitch)("apple", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, undefined, ["apple", "banana", "grape"]);
        expect(result).toBeUndefined();
    });
    it("should return default when case and default do not match and there are no continue cases", () => {
        const result = (0, _1.simpleSwitch)("orange", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, undefined);
        expect(result).toBeUndefined();
    });
    it("should handle number values correctly", () => {
        const result = (0, _1.simpleSwitch)("pear", {
            apple: 10,
            banana: 20,
            pear: 30,
        }, 0);
        expect(result).toEqual(30);
    });
    it("should handle boolean values correctly", () => {
        const result = (0, _1.simpleSwitch)("apple", {
            apple: true,
            banana: false,
        }, false);
        expect(result).toEqual(true);
    });
    it("should handle object values correctly", () => {
        const result = (0, _1.simpleSwitch)("banana", {
            apple: { color: "red" },
            banana: { color: "yellow" },
            grape: { color: "purple" },
        }, { color: "unknown" });
        expect(result).toEqual({ color: "yellow" });
    });
    it("should handle array values correctly", () => {
        const result = (0, _1.simpleSwitch)("grape", {
            apple: [1, 2, 3],
            banana: [4, 5, 6],
            grape: [7, 8, 9],
        }, [0]);
        expect(result).toEqual([7, 8, 9]);
    });
    it("should return correct value when case matches and continueCases is empty array", () => {
        const result = (0, _1.simpleSwitch)("banana", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown", []);
        expect(result).toEqual("yellow");
    });
    it("should return correct value when continueCases contains a case that does not match", () => {
        const result = (0, _1.simpleSwitch)("apple", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown", ["banana", "grape"]);
        expect(result).toEqual("red");
    });
    it("should return default value when case matches but continueCases also contains the case", () => {
        const result = (0, _1.simpleSwitch)("banana", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown", ["banana"]);
        expect(result).toEqual("unknown");
    });
    it("should handle null values correctly", () => {
        const result = (0, _1.simpleSwitch)("apple", {
            apple: null,
            banana: null,
        }, null);
        expect(result).toEqual(null);
    });
    it("should return undefined when value is an empty string", () => {
        const result = (0, _1.simpleSwitch)("", {
            apple: "red",
            banana: "yellow",
            grape: "purple",
        }, "unknown");
        expect(result).toEqual("unknown");
    });
    it("should handle cases where the keys of cases are numeric strings", () => {
        const result = (0, _1.simpleSwitch)("123", {
            "123": "red",
            "456": "yellow",
        }, "unknown");
        expect(result).toEqual("red");
    });
    it("should return the result of a function when cases contain functions", () => {
        const result = (0, _1.simpleSwitch)("banana", {
            apple: () => "red",
            banana: () => "yellow",
            grape: () => "purple",
        }, () => "unknown");
        expect(result()).toEqual("yellow");
    });
    it("should call the default function when case does not match", () => {
        const result = (0, _1.simpleSwitch)("orange", {
            apple: () => "red",
            banana: () => "yellow",
            grape: () => "purple",
        }, () => "unknown");
        expect(result()).toEqual("unknown");
    });
    it("should return undefined when case matches but continueCases also contains the case", () => {
        const result = (0, _1.simpleSwitch)("banana", {
            apple: () => "red",
            banana: () => "yellow",
            grape: () => "purple",
        }, () => "unknown", ["banana"]);
        expect(result()).toEqual("unknown");
    });
    it("should handle functions that return other types", () => {
        const result = (0, _1.simpleSwitch)("pear", {
            apple: () => 10,
            banana: () => 20,
            pear: () => 30,
        }, () => 0);
        expect(result()).toEqual(30);
    });
});
//# sourceMappingURL=index.test.js.map