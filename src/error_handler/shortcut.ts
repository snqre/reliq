import {
    Option,
    Result
} from "@";

export const flag: typeof Option.Handler.flag = Option.Handler.flag;

export const allO: typeof Option.Handler.all = Option.Handler.all;

export const anyO: typeof Option.Handler.any = Option.Handler.any;

export const allR: typeof Result.Handler.all = Result.Handler.all;

export const anyR: typeof Result.Handler.any = Result.Handler.any;

export const wrap: typeof Result.Handler.wrap = Result.Handler.wrap;

export const wrapAsync: typeof Result.Handler.wrapAsync = Result.Handler.wrapAsync;