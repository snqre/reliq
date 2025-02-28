import {
    type TypeGuard,
    type Option,
    type Parsable,
    Some,
    None,
} from "@";

export type Unsafe =
    & Parsable
    & {
    inspect(): unknown;
};

export function Unsafe(_value: unknown): Unsafe {
    /***/ {
        return { inspect, parse };
    }

    function inspect(): unknown {
        return _value;
    }

    function parse<T1>(guard: TypeGuard<T1>): Option<T1> {
        if (!guard(inspect())) return None;
        return Some((inspect() as T1));
    }
}