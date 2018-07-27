import { Disposable } from '../../models/disposable';
export declare class Subscription implements Disposable {
    nonce: string;
    invoke: (parameter: any) => void;
    dispose: () => void;
    constructor(invoke: (param: any) => void, disposeParam: () => void);
}
export declare class EventSubscription<T, T2 = void> implements Disposable {
    nonce: string;
    invoke: (parameter: T) => T2;
    dispose: () => void;
    constructor(invoke: (param: T) => T2, disposeParam: () => void);
}
