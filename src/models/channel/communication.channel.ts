import { Disposable } from '../disposable';
export abstract class CommunicationChannelBase<TClient, TCallback> implements Disposable {
    public constructor(protected client: TClient, protected subscription: TCallback) {}

    public get request(): TClient {
        return this.client;
    }

    public get subscribe(): TCallback {
        return this.subscription;
    }

    abstract dispose(): void;
}
