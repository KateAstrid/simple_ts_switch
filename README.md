Hey people,

This is an attempt to create a small library that replaces the default `switch` from js.

The `simpleSwitch` function has four arguments:

- a value that needs to be compared;
- an object of cases;
- the default value (optional);
- an array of cases that should have `continue` option. By default each branch has a `break` statement.

The object of cases should have the following structure:

```
{
  case1: return_value1,
  case2: return_value2,
  ...
}
```

Usage example:

```
const fruitColor = simpleSwitch<string>(
  "apple",
  {
    apple: "red",
    banana: "yellow",
    grape: "purple",
  },
  "unknownFruit",
  ["banana", "grape"]
);

console.log(fruitColor); // "red"

```

[Open on npm](https://www.npmjs.com/package/simple_ts_switch?activeTab=readme)
