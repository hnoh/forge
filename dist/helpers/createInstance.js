"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createInstance(param) {
    const type = typeof param;
    if (type === 'function') {
        return createExpr(param);
    }
    else {
        return createExpr(() => param);
    }
}
exports.createInstance = createInstance;
function createExpr(expr) {
    let instance = {};
    let result;
    if (typeof expr === 'function') {
        result = expr(instance);
    }
    else {
        instance = expr;
    }
    return result === undefined ? instance : result;
}
exports.createExpr = createExpr;
function retrieveInstance(param) {
    // todo201
}
exports.retrieveInstance = retrieveInstance;
//# sourceMappingURL=createInstance.js.map