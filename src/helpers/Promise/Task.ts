import { ParameterExpr, createExpr } from '../createInstance';
export class Task<T> {
    private resolver: (value?: T | PromiseLike<T>) => void;
    private _promise: Promise<T>;
    private value: T = undefined;

    /**
     * @param timeout mill
     */
    public constructor(timeout: number = 0, public id: string = '') {
        this._promise = new Promise<T>(resolve => {
            this.resolver = resolve;
        });

        setTimeout(() => {
            if (this.value === undefined) {
                throw new Error(`Task wait timeout, id = ${id === '' ? 'none' : id}`);
            }
        }, timeout);
    }

    public setResult(param: ParameterExpr<T>): void {
        if (this.value !== undefined) {
            throw new Error(`promise resolve value already assigned! assigned value = ${this.value} ${this.id === '' ? '' : `id = ${this.id}`}`);
        }

        this.value = createExpr(param);
        this.resolver(this.value);
    }

    public trySetResult(param: ParameterExpr<T>): boolean {
        if (this.value !== undefined) {
            return false;
        }

        this.value = createExpr(param);
        this.resolver(this.value);
        return true;
    }

    public wait(): Promise<T> {
        return this._promise;
    }
}
