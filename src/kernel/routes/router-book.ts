type ExtractPathParams<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | ExtractPathParams<Rest>
  : T extends `${string}:${infer Param}`
    ? Param
    : never;

type PathParams<T extends string> = Record<ExtractPathParams<T>, string>;

type PathFunction<T extends string> =
  ExtractPathParams<T> extends never ? () => T : (params: PathParams<T>) => string;

const createPath = <T extends string>(path: T): PathFunction<T> => {
  return ((params?: PathParams<T>) => {
    if (!params) return path;
    return path.replace(
      /:(\w+)/g,
      (_, param) => params[param as keyof PathParams<T>] || `:${param}`,
    );
  }) as PathFunction<T>;
};

export const ROUTER_BOOK = {
  root: createPath('/'),
  note: {
    root: createPath('/notes'),
    particular: createPath('/notes/:noteId'),
  },
} as const;
