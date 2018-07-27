"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommunicationChannelBase {
    constructor(client, subscription) {
        this.client = client;
        this.subscription = subscription;
    }
    get request() {
        return this.client;
    }
    get subscribe() {
        return this.subscription;
    }
}
exports.CommunicationChannelBase = CommunicationChannelBase;
//# sourceMappingURL=communication.channel.js.map