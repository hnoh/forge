"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompositeBase {
    constructor() { }
    dispose() {
        throw new Error('dispose Method not implemented.');
    }
    publish(parameter, target) {
        return this;
    }
    subscribe(callback) {
        throw new Error('subscripbe Method not implemented.');
    }
    subscribeOnce(callback) {
        throw new Error('subscripbe Method not implemented.');
    }
}
exports.CompositeBase = CompositeBase;
class CompositeDuplexBase {
    constructor() { }
    dispose() {
        throw new Error('dispose Method not implemented.');
    }
    publish(parameter, target) {
        return this;
    }
    subscribe(callback) {
        throw new Error('subscripbe Method not implemented.');
    }
    subscribeOnce(callback) {
        throw new Error('subscripbe Method not implemented.');
    }
}
exports.CompositeDuplexBase = CompositeDuplexBase;
//# sourceMappingURL=composite.base.js.map