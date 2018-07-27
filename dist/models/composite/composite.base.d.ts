import { Disposable } from '../disposable';
import { ParameterExpr } from "../../helpers/createInstance";
export declare abstract class CompositeBase<TComposite> implements Disposable {
    constructor();
    dispose(): void;
    publish(parameter: ParameterExpr<TComposite>, target?: any): CompositeBase<TComposite>;
    subscribe(callback: (param: TComposite) => void): Disposable;
    subscribeOnce(callback: (param: TComposite) => void): Disposable;
}
export declare abstract class CompositeDuplexBase<TCompositeInput, TCompositeOutput> implements Disposable {
    constructor();
    dispose(): void;
    publish(parameter: ParameterExpr<TCompositeInput>, target?: any): CompositeBase<TCompositeInput, TCompositeOutput>;
    subscribe(callback: (param: TCompositeOutput) => void): Disposable;
    subscribeOnce(callback: (param: TCompositeOutput) => void): Disposable;
}
