"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscription {
    constructor(invoke, disposeParam) {
        this.invoke = invoke;
        this.dispose = disposeParam;
    }
}
exports.Subscription = Subscription;
class EventSubscription {
    constructor(invoke, disposeParam) {
        this.invoke = invoke;
        this.dispose = disposeParam;
    }
}
exports.EventSubscription = EventSubscription;
//# sourceMappingURL=subscription.js.map