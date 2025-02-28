import {
    INTERNAL_ERROR_MESSAGE,
    Result,
    Ok,
    Err
} from "@";

type Result$0<T1, T2> = Result<T1, T2>;

export type Fpv<T1 extends Fpv.Decimals> = {

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
    unwrap(): bigint;

    decimals(): T1;
    representation(): bigint;
    eq(x: bigint): boolean;
    eq(x: Fpv<T1>): boolean;
    eq(x: Fpv.Compatible<T1>): boolean;
    lt(x: bigint): boolean;
    lt(x: Fpv<T1>): boolean;
    lt(x: Fpv.Compatible<T1>): boolean;
    gt(x: bigint): boolean;
    gt(x: Fpv<T1>): boolean;
    gt(x: Fpv.Compatible<T1>): boolean;
    lteq(x: bigint): boolean;
    lteq(x: Fpv<T1>): boolean;
    lteq(x: Fpv.Compatible<T1>): boolean;
    gteq(x: bigint): boolean;
    gteq(x: Fpv<T1>): boolean;
    gteq(x: Fpv.Compatible<T1>): boolean;
    add(x: bigint): Fpv<T1>;
    add(x: Fpv<T1>): Fpv<T1>;
    add(x: Fpv.Compatible<T1>): Fpv<T1>;
    sub(x: bigint): Fpv<T1>;
    sub(x: Fpv<T1>): Fpv<T1>;
    sub(x: Fpv.Compatible<T1>): Fpv<T1>;
    mul(x: bigint): Fpv<T1>;
    mul(x: Fpv<T1>): Fpv<T1>;
    mul(x: Fpv.Compatible<T1>): Fpv<T1>;
    div(x: bigint): Fpv.Result<Fpv<T1>>;
    div(x: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    div(x: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    pow(x: bigint): Fpv.Result<Fpv<T1>>;
    pow(x: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    pow(x: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    sqrt(): Fpv.Result<Fpv<T1>>;
    convert<T2 extends Fpv.Decimals>(decimals: T2): Fpv.Result<Fpv<T2>>;
    percentageOf(x: bigint): Fpv.Result<Fpv<T1>>;
    percentageOf(x: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    percentageOf(x: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    percentageGain(newValue: bigint): Fpv.Result<Fpv<T1>>;
    percentageGain(newValue: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    percentageGain(newValue: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    percentageLoss(newValue: bigint): Fpv.Result<Fpv<T1>>;
    percentageLoss(newValue: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    percentageLoss(newValue: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    percentageChange(newValue: bigint): Fpv.Result<Fpv<T1>>;
    percentageChange(newValue: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    percentageChange(newValue: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    sliceOf(percentage: bigint): Fpv.Result<Fpv<T1>>;
    sliceOf(percentage: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    sliceOf(percentage: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    addPercentage(percentage: bigint): Fpv.Result<Fpv<T1>>;
    addPercentage(percentage: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    addPercentage(percentage: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    subPercentage(percentage: bigint): Fpv.Result<Fpv<T1>>;
    subPercentage(percentage: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    subPercentage(percentage: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>>;
    toNumber(): number;
};

/**
 * ***Warning***
 * Does not support negative `decimals`.
 */
export function Fpv<T1 extends Fpv.Decimals>(_v: Fpv.Compatible<T1>, _decimals: T1): Fpv.Result<Fpv<T1>> {
    /***/ {
        if (decimals() < 0n) return Err("FPV.ERR_NEGATIVE_DECIMALS");
        return Ok({
            unwrap,
            decimals,
            representation,
            eq,
            lt,
            gt,
            lteq,
            gteq,
            add,
            sub,
            mul,
            div,
            pow,
            sqrt,
            convert,
            percentageOf,
            percentageGain,
            percentageLoss,
            percentageChange,
            sliceOf,
            addPercentage,
            subPercentage,
            toNumber
        });
    }

    function unwrap(): bigint {
        return Fpv.Calculator.unwrap(_v);
    }

    function decimals(): T1 {
        return _decimals;
    }

    function representation(): bigint {
        return 10n ** decimals();
    }

    function eq(x: bigint): boolean;
    function eq(x: Fpv<T1>): boolean;
    function eq(x: Fpv.Compatible<T1>): boolean {
        return Fpv.Calculator.eq(_v, x);
    }

    function lt(x: bigint): boolean;
    function lt(x: Fpv<T1>): boolean;
    function lt(x: Fpv.Compatible<T1>): boolean {
        return Fpv.Calculator.lt(_v, x);
    }

    function gt(x: bigint): boolean;
    function gt(x: Fpv<T1>): boolean;
    function gt(x: Fpv.Compatible<T1>): boolean {
        return Fpv.Calculator.gt(_v, x);
    }

    function lteq(x: bigint): boolean;
    function lteq(x: Fpv<T1>): boolean;
    function lteq(x: Fpv.Compatible<T1>): boolean {
        return Fpv.Calculator.lteq(_v, x);
    }

    function gteq(x: bigint): boolean;
    function gteq(x: Fpv<T1>): boolean;
    function gteq(x: Fpv.Compatible<T1>): boolean {
        return Fpv.Calculator.gteq(_v, x);
    }

    function add(x: bigint): Fpv<T1>;
    function add(x: Fpv<T1>): Fpv<T1>;
    function add(x: Fpv.Compatible<T1>): Fpv<T1> {
        return Fpv.Calculator
            .add(_v, x, decimals())
            .expect(INTERNAL_ERROR_MESSAGE);
    }

    function sub(x: bigint): Fpv<T1>;
    function sub(x: Fpv<T1>): Fpv<T1>;
    function sub(x: Fpv.Compatible<T1>): Fpv<T1> {
        return Fpv.Calculator
            .sub(_v, x, decimals())
            .expect(INTERNAL_ERROR_MESSAGE);
    }

    function mul(x: bigint): Fpv<T1>;
    function mul(x: Fpv<T1>): Fpv<T1>;
    function mul(x: Fpv.Compatible<T1>): Fpv<T1> {
        return Fpv.Calculator
            .mul(_v, x, decimals())
            .expect(INTERNAL_ERROR_MESSAGE);
    }

    function div(x: bigint): Fpv.Result<Fpv<T1>>;
    function div(x: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function div(x: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.div(_v, x, decimals());
    }

    function pow(x: bigint): Fpv.Result<Fpv<T1>>;
    function pow(x: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function pow(x: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.pow(_v, x, decimals());
    }

    function sqrt(): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.sqrt(_v, decimals());
    }

    function convert<T2 extends Fpv.Decimals>(decimals$0: T2): Fpv.Result<Fpv<T2>> {
        return Fpv.Calculator.convert(_v, decimals(), decimals$0);
    }

    function percentageOf(x: bigint): Fpv.Result<Fpv<T1>>;
    function percentageOf(x: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function percentageOf(x: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.percentageOf(_v, x, decimals());
    }

    function percentageGain(newValue: bigint): Fpv.Result<Fpv<T1>>;
    function percentageGain(newValue: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function percentageGain(newValue: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.percentageGain(_v, newValue, decimals());
    }

    function percentageLoss(newValue: bigint): Fpv.Result<Fpv<T1>>;
    function percentageLoss(newValue: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function percentageLoss(newValue: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.percentageLoss(_v, newValue, decimals());
    }

    function percentageChange(newValue: bigint): Fpv.Result<Fpv<T1>>;
    function percentageChange(newValue: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function percentageChange(newValue: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.percentageChange(_v, newValue, decimals());
    }

    function sliceOf(percentage: bigint): Fpv.Result<Fpv<T1>>;
    function sliceOf(percentage: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function sliceOf(percentage: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.sliceOf(_v, percentage, decimals());
    }

    function addPercentage(percentage: bigint): Fpv.Result<Fpv<T1>>;
    function addPercentage(percentage: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function addPercentage(percentage: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.addPercentage(_v, percentage, decimals());
    }

    function subPercentage(percentage: bigint): Fpv.Result<Fpv<T1>>;
    function subPercentage(percentage: Fpv<T1>): Fpv.Result<Fpv<T1>>;
    function subPercentage(percentage: Fpv.Compatible<T1>): Fpv.Result<Fpv<T1>> {
        return Fpv.Calculator.subPercentage(_v, percentage, decimals());
    }

    function toNumber(): number {
        return Number(_v) / Number(10n**decimals());
    }
}

export namespace Fpv {
    export type Result<T1> = Result$0<T1, ErrorCode>;

    export type ErrorCode = 
        | "FPV.ERR_DIVISION_BY_ZERO"
        | "FPV.ERR_NEGATIVE_DECIMALS"
        | "FPV.ERR_NEGATIVE_EXPONENT"
        | "FPV.ERR_CANNOT_SQUARE_NAGATIVE";

    export type Compatible<T1 extends Decimals = Decimals> = Fpv<T1> | bigint;

    export type Decimals = bigint;

    export type Calculator = {
        unwrap(value: Compatible<Decimals>): bigint;
        eq<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        eq<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        eq<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        eq<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>): boolean;
        eq<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean;
        lt<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        lt<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        lt<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        lt<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>): boolean;
        lt<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean;
        gt<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        gt<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        gt<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        gt<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>): boolean;
        gt<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean;
        lteq<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        lteq<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        lteq<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        lteq<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T1>): boolean;
        lteq<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean;
        gteq<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        gteq<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        gteq<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        gteq<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T1>): boolean;
        gteq<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean;
        add<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        add<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        add<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        add<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        add<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        sub<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        sub<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        sub<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        sub<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        sub<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        mul<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        mul<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        mul<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        mul<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        mul<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        div<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        div<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        div<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        div<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        div<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        pow<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        pow<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        pow<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        pow<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        pow<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        sqrt<T1 extends Decimals>(x: bigint, decimals: T1): Result<Fpv<T1>>;
        sqrt<T1 extends Decimals>(x: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        sqrt<T1 extends Decimals>(x: Compatible<T1>, decimals: T1): Result<Fpv<T1>>; 
        convert<T1 extends Decimals, T2 extends Decimals>(x: bigint, oldDecimals: T1, newDecimals: T2): Result<Fpv<T2>>;
        convert<T1 extends Decimals, T2 extends Decimals>(x: Fpv<T1>, oldDecimals: T1, newDecimals: T2): Result<Fpv<T2>>;
        convert<T1 extends Decimals, T2 extends Decimals>(x: Compatible<T1>, oldDecimals: T1, newDecimals: T2): Result<Fpv<T2>>;
        percentageOf<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageOf<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageOf<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageOf<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageOf<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        percentageGain<T1 extends Decimals>(oldValue: bigint, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageGain<T1 extends Decimals>(oldValue: Fpv<T1>, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageGain<T1 extends Decimals>(oldValue: bigint, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageGain<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Fpv<T1>, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageGain<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Compatible<T1>, newValue: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        percentageLoss<T1 extends Decimals>(oldValue: bigint, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageLoss<T1 extends Decimals>(oldValue: Fpv<T1>, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageLoss<T1 extends Decimals>(oldValue: bigint, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageLoss<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Fpv<T1>, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageLoss<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Compatible<T1>, newValue: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        percentageChange<T1 extends Decimals>(oldValue: bigint, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageChange<T1 extends Decimals>(oldValue: Fpv<T1>, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        percentageChange<T1 extends Decimals>(oldValue: bigint, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageChange<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Fpv<T1>, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        percentageChange<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Compatible<T1>, newValue: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;        
        sliceOf<T1 extends Decimals>(x: bigint, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        sliceOf<T1 extends Decimals>(x: Fpv<T1>, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        sliceOf<T1 extends Decimals>(x: bigint, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        sliceOf<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        sliceOf<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, percentage: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        addPercentage<T1 extends Decimals>(x: bigint, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        addPercentage<T1 extends Decimals>(x: Fpv<T1>, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        addPercentage<T1 extends Decimals>(x: bigint, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        addPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        addPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, percentage: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
        subPercentage<T1 extends Decimals>(x: bigint, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        subPercentage<T1 extends Decimals>(x: Fpv<T1>, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        subPercentage<T1 extends Decimals>(x: bigint, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        subPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        subPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, percentage: Compatible<T2>, decimals: T1): Result<Fpv<T1>>;
    };

    export const Calculator: Calculator = (() => {
        /***/ {
            return {
                unwrap,
                eq,
                lt,
                gt,
                lteq,
                gteq,
                add,
                sub,
                mul,
                div,
                pow,
                sqrt,
                convert,
                percentageOf,
                percentageGain,
                percentageLoss,
                percentageChange,
                sliceOf,
                addPercentage,
                subPercentage
            };
        }

        function unwrap(value: Compatible<Decimals>): bigint {
            return typeof value === "bigint" ? value : value.unwrap();
        }

        function eq<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        function eq<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        function eq<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        function eq<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>): boolean;
        function eq<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean {
            return unwrap(x) === unwrap(y);
        }

        function lt<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        function lt<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        function lt<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        function lt<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>): boolean;
        function lt<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean {
            return unwrap(x) < unwrap(y);
        }

        function gt<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        function gt<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        function gt<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        function gt<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>): boolean;
        function gt<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean {
            return unwrap(x) > unwrap(y);
        }

        function lteq<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        function lteq<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        function lteq<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        function lteq<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T1>): boolean;
        function lteq<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean {
            return unwrap(x) <= unwrap(y);
        }

        function gteq<T1 extends Decimals>(x: bigint, y: bigint): boolean;
        function gteq<T1 extends Decimals>(x: Fpv<T1>, y: bigint): boolean;
        function gteq<T1 extends Decimals>(x: bigint, y: Fpv<T1>): boolean;
        function gteq<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T1>): boolean;
        function gteq<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>): boolean {
            return unwrap(x) >= unwrap(y);
        }

        function add<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function add<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function add<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function add<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        function add<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            return Fpv<T1>(unwrap(x) + unwrap(y), decimals);
        }

        function sub<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function sub<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function sub<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function sub<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        function sub<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            return Fpv<T1>(unwrap(x) - unwrap(y), decimals);
        }

        function mul<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function mul<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function mul<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function mul<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        function mul<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            let y$0: bigint = unwrap(y);
            let z: bigint = x$0 * y$0;
            if (decimals === 0n) return Fpv<T1>(z, decimals);
            return Fpv<T1>(z / (10n ** decimals), decimals);
        }

        function div<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function div<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function div<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function div<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        function div<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            let y$0: bigint = unwrap(y);
            if (y$0 === 0n) return Err("FPV.ERR_DIVISION_BY_ZERO");
            if (decimals === 0n) return Ok(Fpv(x$0 / y$0, decimals).expect(INTERNAL_ERROR_MESSAGE));    
            let z: bigint = x$0 * (10n ** decimals);
            let q: bigint = z / y$0;
            return Ok(Fpv(q, decimals).expect(INTERNAL_ERROR_MESSAGE));
        }

        function pow<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function pow<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function pow<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function pow<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T2>, decimals: T1): Result<Fpv<T1>>;
        function pow<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let base: bigint = unwrap(x);
            let exponent: bigint = unwrap(y);
            if (exponent < 0n) return Err("FPV.ERR_NEGATIVE_EXPONENT");
            let result: bigint = 1n;
            while (exponent > 0n) {
                if (exponent % 2n === 1n) result = (result * base) / (10n ** decimals);
                base = (base * base) / (10n ** decimals);
                exponent /= 2n;
            }
            let result$0: Result<Fpv<T1>> = convert(result, 0n, decimals);
            if (result$0.err()) return result$0;
            let result$1: Fpv<T1> = result$0.unwrap();
            let result$2: bigint = result$1.unwrap();
            return Fpv(result$2, decimals);
        }

        function sqrt<T1 extends Decimals>(x: bigint, decimals: T1): Result<Fpv<T1>>;
        function sqrt<T1 extends Decimals>(x: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function sqrt<T1 extends Decimals>(x: Compatible<T1>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            if (x$0 < 0n) return Err("FPV.ERR_CANNOT_SQUARE_NAGATIVE");
            if (x$0 === 0n) return Fpv(0n, decimals);
            let one: bigint = 10n ** decimals;
            one *= x$0;
            let x$1: bigint = one;
            let y: bigint;
            do {
                y = x$1;
                x$1 = (y + one / y) / 2n; 
            }
            while(x$1 !== y);
            return Fpv(x$1, decimals);
        }

        function convert<T1 extends Decimals, T2 extends Decimals>(x: bigint, oldDecimals: T1, newDecimals: T2): Result<Fpv<T2>>;
        function convert<T1 extends Decimals, T2 extends Decimals>(x: Fpv<T1>, oldDecimals: T1, newDecimals: T2): Result<Fpv<T2>>;
        function convert<T1 extends Decimals, T2 extends Decimals>(x: Compatible<T1>, oldDecimals: T1, newDecimals: T2): Result<Fpv<T2>> {
            if (oldDecimals < 0n) return Err("FPV.ERR_NEGATIVE_DECIMALS");
            if (newDecimals < 0n) return Err("FPV.ERR_NEGATIVE_DECIMALS");
            let x$0: bigint = unwrap(x);
            let scl: bigint;
            if (newDecimals > oldDecimals) {
                scl = 10n ** (newDecimals - oldDecimals as unknown as bigint);
                x$0 *= scl;
            }
            if (newDecimals < oldDecimals) {
                scl = 10n ** (oldDecimals - newDecimals as unknown as bigint);
                x$0 /= scl;
            }
            return Ok(Fpv(x$0, newDecimals).expect(INTERNAL_ERROR_MESSAGE));
        }

        function percentageOf<T1 extends Decimals>(x: bigint, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageOf<T1 extends Decimals>(x: Fpv<T1>, y: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageOf<T1 extends Decimals>(x: bigint, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageOf<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, y: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageOf<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, y: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            let y$0: bigint = unwrap(y);
            return div(x$0, y$0, decimals)
                .map(value => {
                    return value.unwrap();
                })
                .and(value => {
                    return mul(value, 100n * (10n**decimals), decimals);
                });
        }

        function percentageGain<T1 extends Decimals>(oldValue: bigint, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageGain<T1 extends Decimals>(oldValue: Fpv<T1>, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageGain<T1 extends Decimals>(oldValue: bigint, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageGain<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Fpv<T1>, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageGain<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Compatible<T1>, newValue: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let oldValue$0: bigint = unwrap(oldValue);
            let newValue$0: bigint = unwrap(newValue);
            if (newValue$0 <= oldValue$0) return Fpv(0n, decimals);
            return sub(newValue$0, oldValue$0, decimals)
                .and(value => {
                    return div(value, oldValue$0, decimals);
                })
                .and(value => {
                    return mul(value, 100n * (10n**decimals), decimals);
                })
                .mapErr(e => {
                    return e as ErrorCode;
                });
        }

        function percentageLoss<T1 extends Decimals>(oldValue: bigint, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageLoss<T1 extends Decimals>(oldValue: Fpv<T1>, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageLoss<T1 extends Decimals>(oldValue: bigint, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageLoss<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Fpv<T1>, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageLoss<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Compatible<T1>, newValue: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let oldValue$0: bigint = unwrap(oldValue);
            let newValue$0: bigint = unwrap(newValue);
            if (newValue$0 >= oldValue$0) return Fpv(0n, decimals);
            return sub(newValue$0, oldValue$0, decimals)
                .and(value => {
                    return div(value, oldValue$0, decimals)
                })
                .and(value => {
                    return mul(value, 100n * (10n**decimals), decimals);
                })
                .mapErr(e => {
                    return e as ErrorCode;
                });
        }

        function percentageChange<T1 extends Decimals>(oldValue: bigint, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageChange<T1 extends Decimals>(oldValue: Fpv<T1>, newValue: bigint, decimals: T1): Result<Fpv<T1>>;
        function percentageChange<T1 extends Decimals>(oldValue: bigint, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageChange<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Fpv<T1>, newValue: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function percentageChange<T1 extends Decimals, T2 extends T1 = T1>(oldValue: Compatible<T1>, newValue: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let oldValue$0: bigint = unwrap(oldValue);
            let newValue$0: bigint = unwrap(newValue);
            if (newValue$0 <= oldValue$0) return percentageLoss(oldValue$0, newValue$0, decimals);
            return percentageGain(oldValue$0, newValue$0, decimals);
        }

        function sliceOf<T1 extends Decimals>(x: bigint, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        function sliceOf<T1 extends Decimals>(x: Fpv<T1>, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        function sliceOf<T1 extends Decimals>(x: bigint, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function sliceOf<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function sliceOf<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, percentage: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            let percentage$0: bigint = unwrap(percentage);
            let z: Result<Fpv<T1>> = div<T1>(x$0, 100n * (10n**decimals), decimals);
            if (z.err()) return z;
            let z$0: Fpv<T1> = z.unwrap();
            return mul(z$0, percentage$0, decimals);
        }

        function addPercentage<T1 extends Decimals>(x: bigint, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        function addPercentage<T1 extends Decimals>(x: Fpv<T1>, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        function addPercentage<T1 extends Decimals>(x: bigint, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function addPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function addPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, percentage: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            let percentage$0: bigint = unwrap(percentage);
            return sliceOf(x$0, percentage$0, decimals).and(y => {
                return add(x$0, y, decimals);
            });
        }

        function subPercentage<T1 extends Decimals>(x: bigint, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        function subPercentage<T1 extends Decimals>(x: Fpv<T1>, percentage: bigint, decimals: T1): Result<Fpv<T1>>;
        function subPercentage<T1 extends Decimals>(x: bigint, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function subPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Fpv<T1>, percentage: Fpv<T1>, decimals: T1): Result<Fpv<T1>>;
        function subPercentage<T1 extends Decimals, T2 extends T1 = T1>(x: Compatible<T1>, percentage: Compatible<T2>, decimals: T1): Result<Fpv<T1>> {
            let x$0: bigint = unwrap(x);
            let percentage$0: bigint = unwrap(percentage);
            return sliceOf(x$0, percentage$0, decimals).and(y => {
                return sub(x$0, y, decimals);
            });
        }
    })();
}