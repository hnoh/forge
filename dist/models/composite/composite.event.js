"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_1 = require("../channel/subscription");
const getNonce_1 = require("../../helpers/getNonce");
const createInstance_1 = require("../../helpers/createInstance");
const composite_base_1 = require("./composite.base");
// 구독가능한 기본 이벤트 클래스
class CompositeEvent extends composite_base_1.CompositeBase {
    constructor() {
        super();
        this.subscribers = new Array();
    }
    /**
       * @param callback 이벤트를 등록할 콜백
       */
    subscribeOnce(callback) {
        const nonce = getNonce_1.createUniqueNonce(this.subscribers);
        const subscription = new subscription_1.EventSubscription(callback, () => {
            const index = this.subscribers.findIndex(sub => sub.nonce === nonce);
            if (index < 0) {
                throw new Error(`[ERROR] subscription이 존재하지 않습니다. nonce = ${nonce}`);
            }
            this.subscribers.splice(index, 1);
        });
        subscription.nonce = nonce;
        subscription.once = true;
        this.subscribers.push(subscription);
        return subscription;
    }
    /**
     * @param callback 이벤트를 등록할 콜백
     */
    subscribe(callback) {
        const nonce = getNonce_1.createUniqueNonce(this.subscribers);
        const subscription = new subscription_1.EventSubscription(callback, () => {
            const index = this.subscribers.findIndex(sub => sub.nonce === nonce);
            if (index < 0) {
                throw new Error(`[ERROR] subscription이 존재하지 않습니다. nonce = ${nonce}`);
            }
            this.subscribers.splice(index, 1);
        });
        subscription.nonce = nonce;
        this.subscribers.push(subscription);
        return subscription;
    }
    /**
     * @param param 이벤트에 채울 정보.
     */
    publish(parameter, target) {
        if (!target) {
            this.subscribers.forEach(subscriber => {
                subscriber.invoke(createInstance_1.createExpr(parameter));
                if (subscriber.once) {
                    subscriber.dispose();
                }
            });
        }
        return this;
    }
    /**
    * @param param 을 Data를 만들어낸다.
    */
    materialize(parameter) {
        return createInstance_1.createExpr(parameter);
    }
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear() {
        this.subscribers.forEach(subscription => {
            subscription.dispose = () => { };
        });
        this.subscribers.splice(0);
        this.subscribers = new Array();
    }
    dispose() {
        this.clear();
        // todo?
    }
}
exports.CompositeEvent = CompositeEvent;
class CompositeDuplexEvent extends composite_base_1.CompositeDuplexBase {
    constructor() {
        super();
        this.subscribers = new Array();
    }
    /**
       * @param callback 이벤트를 등록할 콜백
       */
    subscribeOnce(callback) {
        const nonce = getNonce_1.createUniqueNonce(this.subscribers);
        const subscription = new subscription_1.EventSubscription(callback, () => {
            const index = this.subscribers.findIndex(sub => sub.nonce === nonce);
            if (index < 0) {
                throw new Error(`[ERROR] subscription이 존재하지 않습니다. nonce = ${nonce}`);
            }
            this.subscribers.splice(index, 1);
        });
        subscription.nonce = nonce;
        subscription.once = true;
        this.subscribers.push(subscription);
        return subscription;
    }
    /**
     * @param callback 이벤트를 등록할 콜백
     */
    subscribe(callback) {
        const nonce = getNonce_1.createUniqueNonce(this.subscribers);
        const subscription = new subscription_1.EventSubscription(callback, () => {
            const index = this.subscribers.findIndex(sub => sub.nonce === nonce);
            if (index < 0) {
                throw new Error(`[ERROR] subscription이 존재하지 않습니다. nonce = ${nonce}`);
            }
            this.subscribers.splice(index, 1);
        });
        subscription.nonce = nonce;
        this.subscribers.push(subscription);
        return subscription;
    }
    /**
     * @param param 이벤트에 채울 정보.
     */
    publish(parameter, target) {
        return this;
    }
    /**
    * @param param 을 Data를 만들어낸다.
    */
    materialize(parameter) {
        return createInstance_1.createExpr(parameter);
    }
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear() {
        this.subscribers.forEach(subscription => {
            subscription.dispose = () => { };
        });
        this.subscribers.splice(0);
        this.subscribers = new Array();
    }
    dispose() {
        this.clear();
        // todo?
    }
}
exports.CompositeDuplexEvent = CompositeDuplexEvent;
//# sourceMappingURL=composite.event.js.map