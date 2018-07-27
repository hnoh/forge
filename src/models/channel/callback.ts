import { Subscription } from './subscription';
import { Disposable } from '../../models/disposable';
import { createUniqueNonce } from '../../helpers/getNonce';

export class GCCallback<TKey> implements Disposable {
    private subscribers: Array<[TKey, Array<Subscription>]>;
    private predicateEnabled: boolean;
    private predicateFuction: (keyReference: TKey) => number | string = undefined;
    private predicate = undefined;

    public constructor() {
        this.subscribers = new Array<[TKey, Array<Subscription>]>();
    }

    private getOrAddSubscribers(keyReference: TKey): Array<Subscription> {
        let keyValuePair = this.getKeyValuePair(keyReference);
        if (keyValuePair === undefined) {
            keyValuePair = [keyReference, new Array<Subscription>()];
            this.subscribers.push(keyValuePair);
        }

        return keyValuePair[1];
    }

    private getKeyValuePair(keyReference: TKey): [TKey, Array<Subscription>] {
        if (this.predicateEnabled) {
            // predicate property overridden process
            const predicateValue = this.getPredicateValue(keyReference);

            return this.subscribers.find(kv => {
                const targetValue = this.getPredicateValue(kv[0]);
                return targetValue === predicateValue;
            });
        }

        // default process
        return this.subscribers.find(kv => {
            return kv[0] === keyReference;
        });
    }

    private getPredicateValue(keyReference: TKey): string | number {
        if (this.predicate) {
            return keyReference[this.predicate];
        }

        if (this.predicateFuction) {
            return this.predicateFuction(keyReference);
        }
    }

    /**
     * primary key로 사용할 필드나 프로퍼티를 등록한다.
     * 해당값이 콜백의 키가 된다.
     */
    public setTruthyPredicateProperty<P extends keyof TKey>(keyReferenceProperty: P): void {
        this.predicateEnabled = true;
        this.predicate = keyReferenceProperty;
        this.predicateFuction = undefined;
    }

    /**
     * primitive type을 return value로 갖고 있는 함수를 등록한다.
     * 해당 함수의 리턴값이 콜백의 키가 된다.
     */
    public setTruthyPredicateFunction(predicateFuction: (keyReference: TKey) => number | string): void {
        this.predicateEnabled = true;
        this.predicate = undefined;
        this.predicateFuction = predicateFuction;
    }

    public publishNotification(keyReference: TKey, param: any): void {
        const subscribers = this.getOrAddSubscribers(keyReference);
        if (subscribers.length < 1) {
            // todo logger, remove dependency (chivas)
            //    console.log('[WARN]', `subscriber가 존재하지 않습니다. protocol = ${keyReference}`);
        } else {
            subscribers.forEach(subscription => {
                subscription.invoke(param);
            });
        }
    }

    public subscribe(keyReference: TKey, callback: (param: any) => void): Disposable {
        const subscriptions: Subscription[] = this.getOrAddSubscribers(keyReference);
        const nonce = createUniqueNonce(subscriptions);

        const subscription = new Subscription(callback, () => {
            const index = subscriptions.findIndex(sub => sub.nonce === nonce);
            if (index < 0) {
                throw new Error(`[ERROR] subscription이 존재하지 않습니다. nonce = ${nonce}`);
            }

            subscriptions.splice(index, 1);
        });

        subscription.nonce = nonce;

        subscriptions.push(subscription);

        return subscription;
    }

    /**
     * 콜백 연결을 모두 해지한다.
     */
    public clear(): void {
        this.subscribers.forEach(subscribers => {
            subscribers[1].forEach(subscription => {
                subscription.dispose = () => {};
            });

            subscribers[1].length = 0;
        });

        this.subscribers.length = 0;
    }

    public dispose(): void {
        this.clear();
        // todo?
    }
}
