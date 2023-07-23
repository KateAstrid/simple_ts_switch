export function simpleSwitch<T>(
  value: string,
  cases: Record<string, T>,
  defaultValue?: T,
  continueCases?: string[]
): T | undefined {
  let result: T | undefined = undefined;
  const keys = Object.keys(cases);

  for (const key of keys) {
    switch (true) {
      case result === undefined && key === value:
        if (!continueCases?.includes(key)) {
          result = cases[key];
          return result;
        }
        break;
      default:
        break;
    }
  }

  return result ?? defaultValue;
}
