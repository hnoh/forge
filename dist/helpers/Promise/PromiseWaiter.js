"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createInstance_1 = require("../createInstance");
/**
 * deferred promise (simplified)
 * author : sky.oh
 * email : sky.oh@nsuslab.com
 * reference : http://docskr.sknow.net/display/GC/Models (under construction)
 * legacy callback을 간편히 대체할 수 있습니다.
 * immediate promise에 비해 code depth를 줄일 수 있습니다. 코드 흐름이 눈에 잘 들어옵니다.
 */
class PromiseWaiter {
    // todo timeout --sky`
    constructor(timeout = 0) {
        this.value = undefined;
        this.promise = new Promise(resolve => {
            this.resolver = resolve;
        });
    }
    /**
     * deffered 된 promise에 값을 resolve 해준다.
     * 중복 요청시 오류를 반환한다.
     */
    set(param) {
        // 이중 resolve를 방지.
        if (this.value !== undefined) {
            throw new Error(`promise resolve value already assigned! assigned value = ${this.value}`);
        }
        this.value = createInstance_1.createExpr(param);
        this.resolver(this.value);
    }
    /**
     * resolve 성공시 true를 반환한다 (최초 1회)
     * 중복 요청시 false를 반환한다.
     */
    trySet(param) {
        // set 함수를 재활용해 try catch 하는 방식은 쓰지않음. (불필요한 에러 생성 방지) --sky`
        if (this.value !== undefined) {
            return false;
        }
        this.value = createInstance_1.createExpr(param);
        this.resolver(this.value);
        return true;
    }
    /**
     * 할당된 Promise를 반환한다.
     * */
    result() {
        return this.promise;
    }
}
exports.PromiseWaiter = PromiseWaiter;
//# sourceMappingURL=PromiseWaiter.js.map