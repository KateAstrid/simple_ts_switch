"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleSwitch = void 0;
function simpleSwitch(value, cases, defaultValue, continueCases) {
    let result = undefined;
    const keys = Object.keys(cases);
    for (const key of keys) {
        switch (true) {
            case result === undefined && key === value:
                if (!(continueCases === null || continueCases === void 0 ? void 0 : continueCases.includes(key))) {
                    result = cases[key];
                    return result;
                }
                break;
            default:
                break;
        }
    }
    return result !== null && result !== void 0 ? result : defaultValue;
}
exports.simpleSwitch = simpleSwitch;
// Usage example:
// const fruitColor = simpleSwitch<string>(
//   "apple",
//   {
//     apple: "red",
//     banana: "yellow",
//     grape: "purple",
//   },
//   "unknown",
//   ["banana", "grape"]
// );
// console.log(fruitColor); // "red"
//# sourceMappingURL=index.js.map