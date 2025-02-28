import {
    type Closure,
    BrandedStruct,
    Option,
    Some,
    None,
    flag,
} from "@";

type Array$0<T1> = Array<T1>;

export type Error<T1 extends string, T2 = unknown> = 
    & BrandedStruct<"Error">
    & {

    /**
     * ***Brief***
     * The unique identifier for this error.
     */
    code: T1;

    /**
     * ***Brief***
     * A human-readable message that explains the nature of the error.
     */
    message: Option<string>;

    /**
     * ***Brief***
     * An optional value that can hold additional data or context related to the error.
     */
    payload: Option<T2>;

    /**
     * ***Brief***
     * The stack trace associated with the error.
     */
    stack: string;
};

/**
 * ***Brief***
 * A custom error with an optional message and payload for strongly-typed errors.
 * 
 * ***Note***
 * This is a general-purpose error structure to manage domain-specific error codes and provide better context.
 */
export function Error<T1 extends string, T2 = unknown>(_configuration: Error.Configuration<T1, T2>): Error<T1, T2>;
export function Error<T1 extends string, T2 = unknown>(_code: T1, _message?: string, _payload?: T2): Error<T1, T2>;
export function Error<T1 extends string, T2 = unknown>(
    _p0: Error.Configuration<T1, T2> | T1,
    _p1?: string,
    _p2?: T2
): Error<T1, T2> {
    /** @constructor */ {
        if (typeof _p0 === "object") {
            let configuration: Error.Configuration<T1, T2> = _p0;
            let handler: Error.Handler = flag(configuration.handler).unwrapOr(Error.Handler);
            return {
                type: "Error",
                code: configuration.code,
                message: Option.Handler.flag(configuration.message),
                payload: Option.Handler.flag(configuration.payload),
                stack: Option.Handler.flag(configuration.stack).unwrapOr(handler.localStackTrace(Error).unwrapOr(""))
            };
        }
        return {
            type: "Error",
            code: _p0,
            message: Option.Handler.flag(_p1),
            payload: Option.Handler.flag(_p2),
            stack: Error.Handler.localStackTrace(Error).unwrapOr("")
        };
    }
}

export namespace Error {
    export type Configuration<T1 extends string, T2 = unknown> = {
        code: T1;
        message?: string;
        payload?: T2;
        stack?: string;
        handler?: Error.Handler;
    };

    export type Task<T1 extends string, T2 = unknown> = Closure<[e: Error<T1, T2>], void>;

    export type Handler = {
        match(unknown: unknown): unknown is Error<any, unknown>;
        match(unknown: unknown, task: Task<any>): unknown is Error<any, unknown>;
        match<T1 extends string>(unknown: unknown, code: T1): unknown is Error<T1, unknown>;
        match<T1 extends string>(unknown: unknown, code: T1, task: Task<T1>): unknown is Error<T1, unknown>;

        /**
         * ***Brief***
         * `panic` throws an error with optional message and stack trace location.
         * 
         * ***Example***
         * ```ts
         *  panic(Error("MATH.ERR_DIVISION_BY_ZERO"));
         *  panic(Error({
         *      code: "MATH.ERR_DIVISION_BY_ZERO",
         *      message: Some("Math: Cannot divide by zero."),
         *      payload: None,
         *      stack: StackTrace(...)
         *  }));
         *  panic("An unrecoverable error has occured.");
         * ```
         */
        panic<T1 extends string>(e: Error<T1>, handler?: Handler): never;
        panic<T1 extends string>(code: T1, at?: Function, handler?: Handler): never;
        localStackTrace(at: Function): Option<string>;
    };

    export const Handler: Handler = (() => {
        let _this: Handler;

        /** @constructor */ {
            return _this = { match, panic, localStackTrace };
        }

        function match(unknown: unknown): unknown is Error<any, unknown>;
        function match(unknown: unknown, task: Task<any>): unknown is Error<any, unknown>;
        function match<T1 extends string>(unknown: unknown, code: T1): unknown is Error<T1, unknown>;
        function match<T1 extends string>(unknown: unknown, code: T1, task: Task<T1>): unknown is Error<T1, unknown>;
        function match<T1 extends string>(
            p0: unknown,
            p1?: T1 | Closure<[e: Error<T1, unknown>], void>,
            p2?: Closure<[e: Error<T1, unknown>], void>
        ): p0 is Error<T1, unknown> {
            let unknown: unknown = p0;
            if (!BrandedStruct.Handler.match(unknown)) return false;
            if (typeof p1 === "string") {
                let code: T1 = p1;
                if (!BrandedStruct.Handler.match(unknown, code)) return false;
            }
            let value: Error<T1> = (unknown as Error<T1>);
            if (typeof p1 === "function") {
                let task: Task<T1> = p1;
                task(value);
                return true;
            }
            if (typeof p2 === "function") {
                let task: Task<T1> = p2;
                task(value);
                return true;
            }
            return true;
        }

        function panic<T1 extends string>(e: Error<T1>, handler?: Handler): never;
        function panic<T1 extends string>(code: T1, at?: Function, handler?: Handler): never;
        function panic<T1 extends string>(
            p0: Error<T1> | T1,
            p1?: Handler | Function,
            p2?: Handler
        ): never {
            if (typeof p0 === "object") {
                let e: Error<T1> = p0;
                let shards: Array$0<string> = e.stack.split("\n");
                shards.shift();
                e.stack = shards.join("\n");
                console.log(shards, "ff");
                throw "\x1Bc" + `\x1B[31m${ e.code }: ${ e.message.unwrapOr("") }\x1B[0m` + "\n" + `${ e.stack }`;
            }
            let code: T1 = p0;
            let at: Function = flag((p1 as Function | undefined)).unwrapOr(panic);
            let handler: Handler = flag(p2).unwrapOr(_this);
            let stack: string = handler
                .localStackTrace(at)
                .toResult(None)
                .map(stack => {
                    let shards: Array$0<string> = stack.split("\n");
                    shards.shift();
                    return shards.join("\n");
                })
                .recover(() => {
                    return "<<< 404 >>>";
                })
                .unwrap();
                
            throw "\x1Bc" + `\x1B[31m${ code }\x1B[0m` + "\n" + `${ stack }`;
        }

        function localStackTrace(location: Function): Option<string> {
            let e: ReturnType<typeof globalThis.Error> = globalThis.Error();
            globalThis.Error.captureStackTrace(e, location);
            if (e.stack) return Some(e.stack);
            return None;
        }
    })();
}