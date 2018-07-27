"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingleSubscriberComposite {
    constructor(compositeChannel, subscriber) {
        this.subscriber = subscriber;
        this.compositeChannelBase = compositeChannel;
    }
    add(compositeImpl) {
        this.compositeChannelBase.get(compositeImpl).subscribe((param) => {
            this.subscriber.call(param, compositeImpl.prototype.constructor.name);
        });
        return this;
    }
}
exports.SingleSubscriberComposite = SingleSubscriberComposite;
class SingleSubscriberOnceComposite {
    constructor(compositeChannel, subscriber) {
        this.subscriber = subscriber;
        this.compositeChannelBase = compositeChannel;
    }
    add(compositeImpl) {
        this.compositeChannelBase.get(compositeImpl).subscribeOnce((param) => {
            this.subscriber.call(param, compositeImpl.prototype.constructor.name);
        });
        return this;
    }
}
exports.SingleSubscriberOnceComposite = SingleSubscriberOnceComposite;
//# sourceMappingURL=composite.channel.subscriber.js.map