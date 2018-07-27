import { Disposable } from '../disposable';
export declare abstract class CommunicationChannelBase<TClient, TCallback> implements Disposable {
    protected client: TClient;
    protected subscription: TCallback;
    constructor(client: TClient, subscription: TCallback);
    readonly request: TClient;
    readonly subscribe: TCallback;
    abstract dispose(): void;
}
