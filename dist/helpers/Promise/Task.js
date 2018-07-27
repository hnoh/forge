"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createInstance_1 = require("../createInstance");
class Task {
    /**
     * @param timeout mill
     */
    constructor(timeout = 0, id = '') {
        this.id = id;
        this.value = undefined;
        this._promise = new Promise(resolve => {
            this.resolver = resolve;
        });
        setTimeout(() => {
            if (this.value === undefined) {
                throw new Error(`Task wait timeout, id = ${id === '' ? 'none' : id}`);
            }
        }, timeout);
    }
    setResult(param) {
        if (this.value !== undefined) {
            throw new Error(`promise resolve value already assigned! assigned value = ${this.value} ${this.id === '' ? '' : `id = ${this.id}`}`);
        }
        this.value = createInstance_1.createExpr(param);
        this.resolver(this.value);
    }
    trySetResult(param) {
        if (this.value !== undefined) {
            return false;
        }
        this.value = createInstance_1.createExpr(param);
        this.resolver(this.value);
        return true;
    }
    wait() {
        return this._promise;
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map