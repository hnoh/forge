export function createInstance<T>(param: T): T {
    const type = typeof param;
    if (type === 'function') {
        return createExpr(<any>param);
    } else {
        return createExpr(() => param);
    }
}

/**
 * createExpr 에서 resolve 가능
 * createExpr(10) -> returns 10;
 * createExpr(() => 10)) -> returns 10;
 * createExpr(instance => { instance.field1 = 10; instance.field2 = 20; })) -> returns { field : 10, field : 20 };
*/
type ParameterExpr<T> = ((param?: T) => T | void) | T;
export { ParameterExpr };

export function createExpr<T>(expr: ParameterExpr<T>): T {
    let instance = (<T>{});
    let result: any;
    if (typeof expr === 'function') {
        result = expr(instance);
    } else {
        instance = <T>expr;
    }

    return result === undefined ? instance : <T>result;
}

export function retrieveInstance(param: any): void {

    // todo201
}
