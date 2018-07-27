export declare function createInstance<T>(param: T): T;
/**
 * createExpr 에서 resolve 가능
 * createExpr(10) -> returns 10;
 * createExpr(() => 10)) -> returns 10;
 * createExpr(instance => { instance.field1 = 10; instance.field2 = 20; })) -> returns { field : 10, field : 20 };
*/
declare type ParameterExpr<T> = ((param?: T) => T | void) | T;
export { ParameterExpr };
export declare function createExpr<T>(expr: ParameterExpr<T>): T;
export declare function retrieveInstance(param: any): void;
