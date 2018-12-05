import { ParameterExpr, createExpr } from '../createInstance';
export class PromiseCompletionSource<T> {
    private resolver: (value?: T | PromiseLike<T>) => void;
    private _promise: Promise<T>;
    private value: T = undefined;

    /**
     * @param timeout mill
     */
    public constructor(private option?: { id: string; timeout?: number }) {
        this._promise = new Promise<T>(resolve => {
            this.resolver = resolve;
        });

        if (option && option.timeout !== undefined) {
            setTimeout(() => {
                if (this.value === undefined) {
                    throw new Error(`Task wait timeout, id = ${this.option.id}`);
                }
            }, option.timeout);
        }
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

    public isCompleted(): boolean {
        return this.value !== undefined;
    }

    public wait(): Promise<T> {
        return this._promise;
    }
}
