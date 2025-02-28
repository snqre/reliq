import {
    type Closure,
    type AsyncClosure,
    Ok,
    Err,
    Unsafe
} from "@";

type Array$0<T1> = Array<T1>;

/**
 * ***Brief***
 * A wrapper that encapsulates either a successful outcome `Ok<T1>` or a failure `Err<T2>`.
 * 
 * ***Example***
 * ```ts
 *  function foo(): Result<200n, 404n> {
 *      if () return Ok(200n);
 *      return Err(404n);
 *  }
 * 
 *  let result: Result<200n, 404n> = foo();
 *  if (result.ok()) {
 *      let value: 200n = result.unlock();
 *      /// ...
 *  }
 * ```
 */
export type Result<T1, T2> = Ok<T1> | Err<T2>;

export namespace Result {
    export type Async<T1, T2> = Promise<Result<T1, T2>>;

    export type Array<T1, T2> = Array$0<Result<T1, T2>>;

    export type Handler = {
        /**
         * ***Brief***
         * Iterates through an array of `Result`, short-circuiting at the first `Err`.
         * 
         * ***Example***
         * ```ts
         * let r0: Result<200n, 404n>;
         * let r1: Result<201n, 405n>;
         * let r2: Result<202n, 406n>;
         * let r: Result<[200n, 201n, 202n], 404n | 405n | 406n> = Result.all([r0, r1, r2]);
         * ```
         */
        all<T1 extends Array<unknown, unknown>>(results: T1): Result<Ok.ValFromAll<T1>, Err.ValFromAll<T1>[number]>;
        
        /**
         * ***Brief***
         * Iterates through an array of `Result`, short-circuiting at the first `Ok`.
         * 
         * ***Example***
         * ```ts
         *  let r0: Result<200n, 404n>;
         *  let r1: Result<201n, 405n>;
         *  let r2: Result<202n, 406n>;
         *  let r: Result<200n | 201n | 202n, [404n, 405n, 406n]> = Result.any([r0, r1, r2]);
         * ```
         */
        any<T1 extends Array<unknown, unknown>>(results: T1): Result<Ok.ValFromAll<T1>[number], Err.ValFromAll<T1>>;
        
        /**
         * ***Brief***
         * Wraps an unsafe operation that might throw an error and returns a `Result`.
         * 
         * ***Example***
         * ```ts
         *  await Result.wrap(() => {
         *      /// Some unsafe task.
         *      /// ...
         *      return 200n;
         *  }).mapErr(unsafe => {
         *      unsafe
         *          .parse((unknown): unknown is string => {
         *              return typeof unknown is "string";
         *          })
         *          .map(string => {
         *              /// ...
         *          });
         *      return 200n;
         *  });
         * ```
         */
        wrap<T1, T2, T3 extends Array$0<T2>>(task: Closure<T3, T1>, ...payload: T3): Result<T1, Unsafe>;
        
        /**
         * ***Brief***
         * Wraps an asynchronous unsafe operation that may throw and returns a `Result`.
         * 
         * 
         * ***Example***
         * ```ts
         *  await Result.wrapAsync(async () => {
         *      /// Some unsafe async task.
         *      /// ...
         *      return 200n;
         *  }).mapErr(unsafe => {
         *      unsafe
         *          .parse((unknown): unknown is string => {
         *              return typeof unknown is "string";
         *          })
         *          .map(string => {
         *              /// ...
         *          });
         *      return 200n;
         *  });
         * ```
         */
        wrapAsync<T1, T2, T3 extends Array$0<T2>>(task: AsyncClosure<T3, T1>, ...payload: T3): Promise<Result<T1, Unsafe>>;
    };

    export const Handler: Handler = (() => {
        /** @constructor */ {
            return { all, any, wrap, wrapAsync };
        }

        function all<T1 extends Array<unknown, unknown>>(results: T1): Result<Ok.ValFromAll<T1>, Err.ValFromAll<T1>[number]> {
            let out: Array$0<unknown> = [];
            let i: number = 0;
            while (i < results.length) {
                let result: Result<unknown, unknown> = results.at(i)!;
                if (result.ok()) out.push(result.unwrap());
                else return result as Err<Err.ValFromAll<T1>[number]>;
                i ++;
            }
            return Ok((out as Ok.ValFromAll<T1>));
        }
    
        function any<T1 extends Array<unknown, unknown>>(results: T1): Result<Ok.ValFromAll<T1>[number], Err.ValFromAll<T1>> {
            let out: Array$0<unknown> = [];
            let i: number = 0;
            while (i < results.length) {
                let wrapper: Result<unknown, unknown> = results.at(i)!;
                if (wrapper.ok()) return wrapper as Ok<Ok.ValFromAll<T1>[number]>;
                else out.push(wrapper.inspect());
                i ++;
            }
            return Err((out as Err.ValFromAll<T1>));
        }
        
        function wrap<T1, T2, T3 extends Array$0<T2>>(task: Closure<T3, T1>, ...payload: T3): Result<T1, Unsafe> {
            try {
                return Ok(task(...payload));
            }
            catch (e) {
                return Err(Unsafe(e));
            }
        }
    
        async function wrapAsync<T1, T2, T3 extends Array$0<T2>>(task: AsyncClosure<T3, T1>, ...payload: T3): Promise<Result<T1, Unsafe>> {
            try {
                return Ok((await task(...payload)));
            }
            catch (e) {
                return Err(Unsafe(e));
            }
        }
    })();
}
