import { Disposable } from "../disposable";
import { ParameterExpr } from "../../helpers/createInstance";
import { CompositeBase, CompositeDuplexBase } from "./composite.base";
export declare abstract class CompositeEvent<TComposite> extends CompositeBase<TComposite> {
    private subscribers;
    constructor();
    /**
       * @param callback 이벤트를 등록할 콜백
       */
    subscribeOnce(callback: (param: TComposite) => void): Disposable;
    /**
     * @param callback 이벤트를 등록할 콜백
     */
    subscribe(callback: (param: TComposite) => void): Disposable;
    /**
     * @param param 이벤트에 채울 정보.
     */
    publish(parameter: ParameterExpr<TComposite>, target?: string): this;
    /**
    * @param param 을 Data를 만들어낸다.
    */
    materialize(parameter: ParameterExpr<TComposite>): TComposite;
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear(): void;
    dispose(): void;
}
export declare abstract class CompositeDuplexEvent<TCompositeInput, TCompositeOutput> extends CompositeDuplexBase<TCompositeInput, TCompositeOutput> {
    private subscribers;
    constructor();
    /**
       * @param callback 이벤트를 등록할 콜백
       */
    subscribeOnce(callback: (param: TCompositeOutput) => void): Disposable;
    /**
     * @param callback 이벤트를 등록할 콜백
     */
    subscribe(callback: (param: TCompositeOutput) => void): Disposable;
    /**
     * @param param 이벤트에 채울 정보.
     */
    publish(parameter: ParameterExpr<TCompositeInput>, target?: string): this;
    /**
    * @param param 을 Data를 만들어낸다.
    */
    materialize(parameter: ParameterExpr<TCompositeInput>): TCompositeInput;
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear(): void;
    dispose(): void;
}
