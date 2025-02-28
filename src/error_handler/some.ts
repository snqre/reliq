import {
    type Branded,
    type Closure,
    type Option,
    Ok,
    None,

} from "@";

export type Some<T1> = 
    & Branded<"Some">
    & {

    /**
     * ***Brief***
     * `some` checks if the current instance is `Some`.
     * 
     * ***Example***
     * ```ts
     *  let option: Option<200n>;
     *  if (option.some()) {
     *      let value: 200n = option.unlock();
     *      /// ...
     *  }
     * ```
     */
    some(): this is Some<T1>;

    /**
     * ***Brief***
     * `none` checks if the current instance is `None`.
     * 
     * ***Example***
     * ```ts
     *  let option: Option<200n>;
     *  if (option.none()) {
     *      /// `Option` cannot `unlock` because it is `None`.
     *      /// ...
     *  }
     * ```
     */
    none(): this is None;

    /**
     * ***Brief***
     * `expect` terminates with `panic` if the `Option` is `None`.
     * 
     * ***Warning***
     * Reserved for debugging or unrecoverable errors.
     * 
     * ***Example***
     * ```ts
     *  let option: Option<200n>;
     *  let status: 200n = option.expect("This is unexpected and unrecoverable.");
     * ```
     */
    expect(): T1;
    expect(__: unknown): T1;
    expect(__?: unknown): T1;

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
     * Retrieves the value of a `Some`, or falls back to the provided value if it’s `None`.
     * 
     * ***Example***
     * ```ts
     *  let option: Option<200n> = None;
     *  let status: 200n = option.unwrapOr(200n);
     *  console.log(status); /// 200n.
     * ```
     */
    unwrapOr(__: unknown): T1;

    /**
     * ***Brief***
     * Chains an task until the first `None` is encountered.
     * 
     * ***Example***
     * ```ts
     *  let option: Option<200n> = None;
     *  option
     *      .and(value => {
     *          /// Task is skipped because `Option` is `None`.
     *          /// ...
     *          return Some(value + 1n);
     *      })
     *      .and(value => {
     *          /// Task is skipped because `Option` is `None`.
     *          /// ...
     *      });
     * ```
     */
    and<T2>(task: Closure<[T1], Option<T2>>): Option<T2>;

    /**
     * ***Brief***
     * Transforms the `Some` value if present, but if this is already an `None`, it remains unchanged.
     * 
     * ***Example***
     * ```ts
     *  let option0: Option<200n> = Some(200n);
     *  let option1: Option<201n> = option.map(value => {
     *      /// Task is run because `Option` is `Some`.
     *      /// ...
     *      return value + 1n;
     *  });
     * ```
     */
    map<T2>(task: Closure<[T1], T2>): Some<T2>;

    /**
     * ***Brief***
     * Converts an `Option<T1>` to a `Result<T1, T2>`.
     * 
     * ***Example***
     * ```ts
     *  let option: Option<200n>;
     *  let result: Result<200n, 404n> = option.toResult(404n);
     * ```
     */
    toResult(__: unknown): Ok<T1>;
};

/**
 * ***Brief***
 * The value within an `Option`.
 */
export function Some<T1>(_value: T1): Some<T1> {
    /** @constructor */ {
        return {
            type,
            some,
            none,
            expect,
            unwrap,
            unwrapOr,
            and,
            map,
            toResult
        };
    }

    function type(): "Some" {
        return "Some";
    }

    function some(): this is Some<T1> {
        return true;
    }

    function none(): this is None {
        return false;
    }

    function expect(): T1;
    function expect(__: unknown): T1;
    function expect(__?: unknown): T1 {
        return _value;
    }

    function unwrap(): T1 {
        return _value;
    }

    function unwrapOr(__: unknown): T1 {
        return _value;
    }

    function and<T2>(task: Closure<[T1], Option<T2>>): Option<T2> {
        return task(_value);
    }

    function map<T2>(task: Closure<[T1], T2>): Some<T2> {
        return Some(task(_value));
    }

    function toResult(__: unknown): Ok<T1> {
        return Ok(_value);
    }
}

export namespace Some {
    export type From<T1 extends Option<unknown>> = T1 extends Some<infer T2> ? Some<T2> : never;

    export type FromAll<T1 extends Array<Option<unknown>>> = {
        [T2 in keyof T1]: T1[T2] extends Some<unknown> ? From<T1[T2]> : never
    };

    export type ValFrom<T1 extends Option<unknown>> = T1 extends Some<infer T2> ? T2 : never;

    export type ValFromAll<T1 extends Array<Option<unknown>>> = {
        [T2 in keyof T1]: ValFrom<T1[T2]>;
    };
}