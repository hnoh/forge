"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composite_channel_subscriber_1 = require("./composite.channel.subscriber");
/**
 * 범용 이벤트 채널 서비스
 */
class CompositeChannelBase {
    constructor() {
        this.composites = new Map();
    }
    /**
     * @param composite 구독할 컴포지트 클래스의 이름
     */
    get(composite) {
        const compositeName = composite.prototype.constructor.name;
        if (this.composites.has(compositeName) === false) {
            this.composites.set(compositeName, new composite());
        }
        return this.composites.get(compositeName);
    }
    dispose() {
        this.composites.forEach(composite => {
            composite.dispose();
        });
    }
    subscribes(subscriber) {
        return new composite_channel_subscriber_1.SingleSubscriberComposite(this, subscriber);
    }
    subscribesOnce(subscriberOnce) {
        return new composite_channel_subscriber_1.SingleSubscriberComposite(this, subscriberOnce);
    }
}
exports.CompositeChannelBase = CompositeChannelBase;
//# sourceMappingURL=composite.channel.js.map