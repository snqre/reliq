import {
    Some,
    None
} from "@";

type Array$0<T1> = Array<T1>;

/**
 * ***Brief***
 * A type that represents an optional value, encapsulating either a value `Some` 
 * or the absence of a value `None`.
 */
export type Option<T1> = Some<T1> | None;

export namespace Option {
    export type Async<T1> = Promise<Option<T1>>;

    export type Array<T1> = Array$0<Option<T1>>;

    /**
     * ***Brief***
     * Utility class for handling tasks within `Option`.
     */
    export type Handler = {
        /**
         * ***Brief***
         * Wraps a value into an `Option`, turning `null` or `undefined` to `None`.
         * 
         * ***Example***
         * ```ts
         *  let foo: string | undefined;
         *  Option
         *      .flag(foo)
         *      .map(foo => {
         *          /// ...
         *      });
         * ```
         */
        flag<T1>(value: T1 | null | undefined): Option<T1>;

        /**
         * ***Brief***
         * Iterates through an array of `Option`, short-circuiting at the first `None`.
         * 
         * ***Example***
         * ```ts
         *  let o0: Option<200n>;
         *  let o1: Option<201n>;
         *  let o2: Option<202n>;
         *  let o: Option<[200n, 201n, 202n]> = Option.all([o0, o1, o2]);
         * ```
         */
        all<T1 extends Option.Array<unknown>>(...options: T1): Option<Some.ValFromAll<T1>>;
        
        /**
         * ***Brief***
         * Iterates through an array of `Option`, short-circuiting at the first `Some`.
         * 
         * ***Example***
         * ```ts
         *  let o0: Option<200n>;
         *  let o1: Option<201n>;
         *  let o2: Option<202n>;
         *  let o: Option<200n | 201n | 202n> = Option.any([o0, o1, o2]);
         * ```
         */
        any<T1 extends Option.Array<unknown>>(...options: T1): Option<Some.ValFromAll<T1>[number]>;
    };

    export const Handler: Handler = (() => {
        { return { flag, all, any }; }

        function flag<T1>(value: T1 | null | undefined): Option<T1> {
            if (value === null) return None;
            if (value === undefined) return None;
            return Some((value as T1));
        }

        function all<T1 extends Option.Array<unknown>>(...options: T1): Option<Some.ValFromAll<T1>> {
            let out: Array$0<unknown> = [];
            let i: number = 0;
            while (i < options.length) {
                let option: Option<unknown> = options.at(i)!;
                if (option.none()) return option as None;
                out.push(option.unwrap());
                i ++;
            }
            return Some(out as Some.ValFromAll<T1>);
        }

        function any<T1 extends Option.Array<unknown>>(...options: T1): Option<Some.ValFromAll<T1>[number]> {
            let i: number = 0;
            while (i < options.length) {
                let option: Option<unknown> = options.at(i)!;
                if (option.some()) return option as Some<Some.ValFromAll<T1>[number]>;
                i ++;
            }
            return None;
        }
    })();
}