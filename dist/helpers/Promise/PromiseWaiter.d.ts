import { ParameterExpr } from '../createInstance';
/**
 * deferred promise (simplified)
 * author : sky.oh
 * email : sky.oh@nsuslab.com
 * reference : http://docskr.sknow.net/display/GC/Models (under construction)
 * legacy callback을 간편히 대체할 수 있습니다.
 * immediate promise에 비해 code depth를 줄일 수 있습니다. 코드 흐름이 눈에 잘 들어옵니다.
 */
export declare class PromiseWaiter<T> {
    nonce: string;
    private resolver;
    private promise;
    private value;
    constructor(timeout?: number);
    /**
     * deffered 된 promise에 값을 resolve 해준다.
     * 중복 요청시 오류를 반환한다.
     */
    set(param: ParameterExpr<T>): void;
    /**
     * resolve 성공시 true를 반환한다 (최초 1회)
     * 중복 요청시 false를 반환한다.
     */
    trySet(param: ParameterExpr<T>): boolean;
    /**
     * 할당된 Promise를 반환한다.
     * */
    result(): Promise<T>;
}
