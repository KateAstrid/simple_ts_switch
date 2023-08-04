import { simpleSwitch } from ".";

describe("processWithSwitch", () => {
  it("should return correct value when case matches and no continue cases", () => {
    const result = simpleSwitch<string>(
      "apple",
      {
        apple: "red",
        banana: "yellow",
        grape: "purple",
      },
      "unknown"
    );
    expect(result).toEqual("red");
  });

  it("should return default value when case does not match", () => {
    const result = simpleSwitch<string>(
      "orange",
      {
        apple: "red",
        banana: "yellow",
        grape: "purple",
      },
      "unknown"
    );
    expect(result).toEqual("unknown");
  });

  it("should return default when case and default do not match and there are no continue cases", () => {
    const result = simpleSwitch<string>(
      "orange",
      {
        apple: "red",
        banana: "yellow",
        grape: "purple",
      },
      undefined
    );
    expect(result).toBeUndefined();
  });

  it("should handle number values correctly", () => {
    const result = simpleSwitch<number>(
      "pear",
      {
        apple: 10,
        banana: 20,
        pear: 30,
      },
      0
    );
    expect(result).toEqual(30);
  });

  it("should handle boolean values correctly", () => {
    const result = simpleSwitch<boolean>(
      "apple",
      {
        apple: true,
        banana: false,
      },
      false
    );
    expect(result).toEqual(true);
  });

  it("should handle object values correctly", () => {
    const result = simpleSwitch<object>(
      "banana",
      {
        apple: { color: "red" },
        banana: { color: "yellow" },
        grape: { color: "purple" },
      },
      { color: "unknown" }
    );
    expect(result).toEqual({ color: "yellow" });
  });

  it("should handle array values correctly", () => {
    const result = simpleSwitch<Array<number>>(
      "grape",
      {
        apple: [1, 2, 3],
        banana: [4, 5, 6],
        grape: [7, 8, 9],
      },
      [0]
    );
    expect(result).toEqual([7, 8, 9]);
  });

  it("should handle null values correctly", () => {
    const result = simpleSwitch<null>(
      "apple",
      {
        apple: null,
        banana: null,
      },
      null
    );
    expect(result).toEqual(null);
  });

  it("should return undefined when value is an empty string", () => {
    const result = simpleSwitch<string>(
      "",
      {
        apple: "red",
        banana: "yellow",
        grape: "purple",
      },
      "unknown"
    );
    expect(result).toEqual("unknown");
  });

  it("should handle cases where the keys of cases are numeric strings", () => {
    const result = simpleSwitch<string>(
      "123",
      {
        "123": "red",
        "456": "yellow",
      },
      "unknown"
    );
    expect(result).toEqual("red");
  });

  it("should return the result of a function when cases contain functions", () => {
    const result = simpleSwitch<() => string>(
      "banana",
      {
        apple: () => "red",
        banana: () => "yellow",
        grape: () => "purple",
      },
      () => "unknown"
    );
    expect(result()).toEqual("yellow");
  });

  it("should call the default function when case does not match", () => {
    const result = simpleSwitch<() => string>(
      "orange",
      {
        apple: () => "red",
        banana: () => "yellow",
        grape: () => "purple",
      },
      () => "unknown"
    );
    expect(result()).toEqual("unknown");
  });

  it("should handle functions that return other types", () => {
    const result = simpleSwitch<() => number>(
      "pear",
      {
        apple: () => 10,
        banana: () => 20,
        pear: () => 30,
      },
      () => 0
    );
    expect(result()).toEqual(30);
  });
});
