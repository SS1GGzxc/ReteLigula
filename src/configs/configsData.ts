export interface optionsData {
  mode?: 'cors' | 'no-cors',
  cache?: "default" |"no-cache" | "reload" | "force-cache" | "only-if-cached",
  credentials?: "include" | "same-origin" | "omit",
  headers?: {
    "Content-Type": "application/json" | "application/x-www-form-urlencoded"
  },
  redirect?: "follow" | "error" | "manual",
  referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"
};
