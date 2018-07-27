import { CompositeChannelBase } from './composite.channel';
import { CompositeBase } from '../composite/composite.base';
export declare class SingleSubscriberComposite {
    private subscriber;
    private compositeChannelBase;
    constructor(compositeChannel: CompositeChannelBase, subscriber: (param: any, name?: string) => void);
    add<T extends CompositeBase<TComposite>, TComposite>(compositeImpl: {
        new (): T;
    }): SingleSubscriberComposite;
}
export declare class SingleSubscriberOnceComposite {
    private subscriber;
    private compositeChannelBase;
    constructor(compositeChannel: CompositeChannelBase, subscriber: (param: any, name?: string) => void);
    add<T extends CompositeBase<TComposite>, TComposite>(compositeImpl: {
        new (): T;
    }): SingleSubscriberOnceComposite;
}
