import {
    type Closure,
    type Option,
    type Result,
    type Function as Function$0,
    Error,
    Err,
    Some,
} from "@";

export type Ok<T1> = {

    /**
     * ***Brief***
     * `ok` checks if the current instance is `Ok`.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n>;
     *  if (result.ok()) {
     *      let value: 200n = result.unlock();
     *      /// ...
     *  }
     * ```
     */
    ok(): this is Ok<T1>;

    /**
     * ***Brief***
     * `err` checks if the current instance is `Err`.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n>;
     *  if (result.err()) {
     *      let e: 404n = result.inspect();
     *      /// ...
     *  }
     * ```
     */
    err(): this is Err<unknown>;

    /**
     * ***Brief***
     * `expect` terminates with `panic` if the `Result` is `Err`.
     * 
     * ***Warning***
     * Reserved for debugging or unrecoverable errors.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n>;
     *  let status: 200n = result.expect("This is unexpected and unrecoverable.");
     * ```
     */
    expect(): T1;
    expect(__: unknown): T1;
    expect(__?: unknown): T1;

    /**
     * ***Brief***
     * Ensures that the `Result` is an `Err` and retrieves the error value inside.
     * 
     * ***Warning***
     * Reserved for debugging or unrecoverable errors.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n>;
     *  let status: 404n = result.expectErr("This is unexpected and unrecoverable.");
     * ```
    */
    expectErr(): never;
    expectErr(message: string): never;
    expectErr(message?: string): never;

    /**
     * ***Brief***
     * Unwraps the wrapped value of type `T1`.
     * 
     * ***Requirement***
     * Does not `panic`.
     * 
     * ***Example***
     * ```ts
     *  let unsafe: Unsafe = Unsafe(500n);
     *  unsafe.unwrap();
     * ```
     */
    unwrap(): T1;
    
    /**
     * ***Brief***
     * Retrieves the value of an `Ok`, or falls back to the provided value if it’s an `Err`.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n> = Err(404n);
     *  let status: 200n = result.unwrapOr(200n);
     *  console.log(status); /// 200n.
     * ```
     */
    unwrapOr(__: unknown): T1;

    /**
     * ***Brief***
     * Recovers from the current error by applying a recovery function, transforming the `Err` into an `Ok`.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n> = Err(404n);
     *  let status: 200n = result
     *      .recover(() => {
     *          return 200n;
     *      })
     *      .unlock();
     * ```
     */
    recover(__: unknown): Ok<T1>;

    /**
     * ***Brief***
     * Applies a transformation to the `Ok` value and returns an `Err` instance with the transformed value.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n> = Ok(200n);
     *  let e: 404n = result
     *      .degrade(() => {
     *          return 404n;
     *      })
     *      .inspect();
     *  console.log(e); /// 404n.
     * ```
     */
    degrade<T2>(task: Function$0<T1, T2>): Err<T2>;

    /**
     * ***Brief***
     * Chains an task until the first `Err` is encountered.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n> = Err(404n);
     *  result
     *      .and(value => {
     *          /// Task is skipped because `Result` is an `Err`.
     *          /// ...
     *          return Ok(value + 1n);
     *      })
     *      .and(value => {
     *          /// Task is skipped because `Result` is an `Err`.
     *          /// ...
     *      });
     * ```
     */
    and<T2>(task: Closure<[T1], Ok<T2>>): Ok<T2>;
    and<T2>(task: Closure<[T1], Err<T2>>): Result<T1, T2>;
    and<T2, T3>(task: Closure<[T1], Result<T2, T3>>): Result<T2, T3>;

    /**
     * ***Brief***
     * Transforms the `Ok` value if present, but if this is already an `Err`, it remains unchanged.
     * 
     * ***Example***
     * ```ts
     *  let result0: Result<200n, 404n> = Ok(200n);
     *  let result1: Result<201n, 404n> = result.map(value => {
     *      /// Task is run because `Result` is `Ok`.
     *      /// ...
     *      return value + 1n;
     *  });
     * ```
     */
    map<T2>(task: Closure<[T1], T2>): Ok<T2>;

    /**
     * ***Brief***
     * Transforms the error contained in the `Err` using the provided `task` function.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n> = Err(404n);
     *  result
     *      .mapErr(e => {
     *          return e + 1n;
     *      })
     *      .inspect(); /// 405n.
     * ```
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n> = Ok(200n);
     *  result
     *      .mapErr(e => {
     *          /// Task is run because `Result` is `Ok`.
     *          /// ...
     *      });
     * ```
     */
    mapErr(__: unknown): Ok<T1>;

    /**
     * ***Brief***
     * Converts a `Result<T1, T2>` to an `Option<T1>`.
     * 
     * ***Example***
     * ```ts
     *  let result: Result<200n, 404n>;
     *  let option: Option<200n> = result.toOption();
     * ```
     */
    toOption(): Option<T1>;
};

/**
 * ***Brief***
 * The successful value within a `Result`.
 */
export function Ok<T1>(_value: T1): Ok<T1> {
    let _this: Ok<T1>;

    /** @constructor */ {
        return _this = {
            ok,
            err,
            expect,
            expectErr,
            unwrap,
            unwrapOr,
            and,
            map,
            mapErr,
            recover,
            degrade,
            toOption
        };
    }

    function ok(): this is Ok<T1> {
        return true;
    }

    function err(): this is Err<unknown> {
        return false;
    }
    
    function expect(): T1;
    function expect(__: unknown): T1;
    function expect(__?: unknown): T1 {
        return unwrap();
    }

    function expectErr(): never;
    function expectErr(message: string): never;
    function expectErr(message?: string): never {
        Error.Handler.panic(Error("PANIC", message));
    }

    function unwrap(): T1 {
        return _value;
    }

    function unwrapOr(__: unknown): T1 {
        return unwrap();
    }

    function and<T2>(task: Closure<[T1], Ok<T2>>): Ok<T2>;
    function and<T2>(task: Closure<[T1], Err<T2>>): Result<T1, T2>;
    function and<T2, T3>(task: Closure<[T1], Result<T2, T3>>): Result<T2, T3>;
    function and<T2, T3>(task: Closure<[T1], Result<T2, T3>>): Result<T2, T3> {
        return task(unwrap());
    }

    function map<T2>(task: Closure<[T1], T2>): Ok<T2> {
        return Ok(task(unwrap()));
    }

    function mapErr(__: unknown): Ok<T1> {
        return _this;
    }

    function recover(__: unknown): Ok<T1> {
        return _this;
    }

    function degrade<T2>(task: Closure<[T1], T2>): Err<T2> {
        return Err(task(unwrap()));
    }

    function toOption(): Option<T1> {
        return Some(unwrap());
    }
}

export namespace Ok {
    export type From<T1 extends Result<unknown, unknown>> = T1 extends Ok<infer T2> ? Ok<T2> : never;

    export type FromAll<T1 extends Array<Result<unknown, unknown>>> = {
        [T2 in keyof T1]: T1[T2] extends Ok<unknown> ? From<T1[T2]> : never;
    };

    export type ValFrom<T1 extends Result<unknown, unknown>> = T1 extends Ok<infer T2> ? T2 : never;

    export type ValFromAll<T1 extends Array<Result<unknown, unknown>>> = {
        [T2 in keyof T1]: ValFrom<T1[T2]>;
    };
}