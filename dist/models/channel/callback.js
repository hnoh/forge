"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_1 = require("./subscription");
const getNonce_1 = require("../../helpers/getNonce");
class GCCallback {
    constructor() {
        this.predicateFuction = undefined;
        this.predicate = undefined;
        this.subscribers = new Array();
    }
    getOrAddSubscribers(keyReference) {
        let keyValuePair = this.getKeyValuePair(keyReference);
        if (keyValuePair === undefined) {
            keyValuePair = [keyReference, new Array()];
            this.subscribers.push(keyValuePair);
        }
        return keyValuePair[1];
    }
    getKeyValuePair(keyReference) {
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
    getPredicateValue(keyReference) {
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
    setTruthyPredicateProperty(keyReferenceProperty) {
        this.predicateEnabled = true;
        this.predicate = keyReferenceProperty;
        this.predicateFuction = undefined;
    }
    /**
     * primitive type을 return value로 갖고 있는 함수를 등록한다.
     * 해당 함수의 리턴값이 콜백의 키가 된다.
     */
    setTruthyPredicateFunction(predicateFuction) {
        this.predicateEnabled = true;
        this.predicate = undefined;
        this.predicateFuction = predicateFuction;
    }
    publishNotification(keyReference, param) {
        const subscribers = this.getOrAddSubscribers(keyReference);
        if (subscribers.length < 1) {
            // todo logger, remove dependency (chivas)
            //    console.log('[WARN]', `subscriber가 존재하지 않습니다. protocol = ${keyReference}`);
        }
        else {
            subscribers.forEach(subscription => {
                subscription.invoke(param);
            });
        }
    }
    subscribe(keyReference, callback) {
        const subscriptions = this.getOrAddSubscribers(keyReference);
        const nonce = getNonce_1.createUniqueNonce(subscriptions);
        const subscription = new subscription_1.Subscription(callback, () => {
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
    clear() {
        this.subscribers.forEach(subscribers => {
            subscribers[1].forEach(subscription => {
                subscription.dispose = () => { };
            });
            subscribers[1].length = 0;
        });
        this.subscribers.length = 0;
    }
    dispose() {
        this.clear();
        // todo?
    }
}
exports.GCCallback = GCCallback;
//# sourceMappingURL=callback.js.map