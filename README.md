Hey people,

This is an attempt to create a small library that replaces the default `switch` from js.

The `simpleSwitch` function has three arguments:

- a value that needs to be compared <string>;
- an object of cases <Record<string, T>>;
- the default value (optional) <T>.

The object of cases should have the following structure:

```
{
  case1: return_value1,
  case2: return_value2,
  ...
}
```

There is always a break after the first found case.

Usage example:

```
const fruitColor = simpleSwitch<string>(
  "apple",
  {
    apple: "red",
    banana: "yellow",
    grape: "purple",
  },
  "unknownFruit"
);

console.log(fruitColor); // "red"

```

[Open on npm](https://www.npmjs.com/package/simple_ts_switch?activeTab=readme)
