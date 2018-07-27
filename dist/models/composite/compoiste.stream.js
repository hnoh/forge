"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composite_base_1 = require("./composite.base");
const PromiseWaiter_1 = require("../../helpers/Promise/PromiseWaiter");
const subscription_1 = require("../channel/subscription");
const createInstance_1 = require("../../helpers/createInstance");
class CompositeStream extends composite_base_1.CompositeBase {
    constructor() {
        super();
    }
    aggregate() {
    }
    /**
     * @param stream 스트림을
     */
    setStream(callback) {
        if (this.process) {
            throw new Error(`stream already assigend = ${typeof this.constructor.name}`);
        }
        this.process = callback;
        return new subscription_1.Subscription(undefined, () => {
            this.process = undefined;
        });
    }
    /**
     * @param param 이벤트에 채울 정보.
     */
    readStream(expr) {
        const waiter = new PromiseWaiter_1.PromiseWaiter();
        const protocol = {
            data: createInstance_1.createExpr(expr),
            resolve: value => {
                waiter.set(value);
            }
        };
        if (this.process) {
            this.process(protocol);
            return waiter.result();
        }
        throw new Error(`composite streamer not found = "Stream.${this.constructor.name}`);
    }
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear() {
        this.process = undefined;
    }
    dispose() {
        this.clear();
        // todo?
    }
}
exports.CompositeStream = CompositeStream;
//# sourceMappingURL=compoiste.stream.js.map