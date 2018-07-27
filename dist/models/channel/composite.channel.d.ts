import { Disposable } from '../disposable';
import { CompositeBase } from '../composite/composite.base';
import { SingleSubscriberComposite } from './composite.channel.subscriber';
/**
 * 범용 이벤트 채널 서비스
 */
export declare abstract class CompositeChannelBase implements Disposable {
    protected composites: Map<string, CompositeBase<any>>;
    constructor();
    /**
     * @param composite 구독할 컴포지트 클래스의 이름
     */
    get<T extends CompositeBase<any>>(composite: {
        new (): T;
    }): T;
    dispose(): void;
    subscribes(subscriber: (param: any, name?: string) => void): SingleSubscriberComposite;
    subscribesOnce(subscriberOnce: (param: any, name?: string) => void): SingleSubscriberComposite;
}
