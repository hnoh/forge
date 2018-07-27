import { ParameterExpr } from '../createInstance';
export declare class Task<T> {
    id: string;
    private resolver;
    private _promise;
    private value;
    /**
     * @param timeout mill
     */
    constructor(timeout?: number, id?: string);
    setResult(param: ParameterExpr<T>): void;
    trySetResult(param: ParameterExpr<T>): boolean;
    wait(): Promise<T>;
}
