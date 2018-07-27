import { Disposable } from '../../models/disposable';
export class Subscription implements Disposable {
    public nonce: string;
    public invoke: (parameter: any) => void;
    public dispose: () => void;
    public constructor(invoke: (param: any) => void, disposeParam: () => void) {
        this.invoke = invoke;
        this.dispose = disposeParam;
    }
}

export class EventSubscription<T, T2 = void> implements Disposable {
    public nonce: string;
    public invoke: (parameter: T) => T2;
    public dispose: () => void;
    public constructor(invoke: (param: T) => T2, disposeParam: () => void) {
        this.invoke = invoke;
        this.dispose = disposeParam;
    }
}

