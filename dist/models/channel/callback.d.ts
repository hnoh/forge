import { Disposable } from '../../models/disposable';
export declare class GCCallback<TKey> implements Disposable {
    private subscribers;
    private predicateEnabled;
    private predicateFuction;
    private predicate;
    constructor();
    private getOrAddSubscribers;
    private getKeyValuePair;
    private getPredicateValue;
    /**
     * primary key로 사용할 필드나 프로퍼티를 등록한다.
     * 해당값이 콜백의 키가 된다.
     */
    setTruthyPredicateProperty<P extends keyof TKey>(keyReferenceProperty: P): void;
    /**
     * primitive type을 return value로 갖고 있는 함수를 등록한다.
     * 해당 함수의 리턴값이 콜백의 키가 된다.
     */
    setTruthyPredicateFunction(predicateFuction: (keyReference: TKey) => number | string): void;
    publishNotification(keyReference: TKey, param: any): void;
    subscribe(keyReference: TKey, callback: (param: any) => void): Disposable;
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear(): void;
    dispose(): void;
}
