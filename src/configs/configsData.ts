export type InputQuery = {name: string | number, value: string | number};
export type InputData = {BodyValue?: any, query?: InputQuery[]};
export type result = {
  type: string,
  status: number,
  statusText: string,
  ok: boolean,
  data?: any
};

export type optionsData = {
  mode?: 'cors' | 'no-cors',
  cache?: "default" |"no-cache" | "reload" | "force-cache" | "only-if-cached",
  credentials?: "include" | "same-origin" | "omit",
  headers?: {
    "Content-Type": "application/json" | "application/x-www-form-urlencoded"
  },
  redirect?: "follow" | "error" | "manual",
  referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"
};
