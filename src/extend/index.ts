export const extend = (...f: any[]) =>
  f.reduce(
    (a, b) => (...args: any[]) => a(b(...args)),
    (arg: any) => arg
  );
