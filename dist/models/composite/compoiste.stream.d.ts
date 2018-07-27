import { CompositeBase } from './composite.base';
import { Disposable } from '../disposable';
import { ParameterExpr } from '../../helpers/createInstance';
export interface CompositeStreamProtocol<TStream = void, TStreamResult = string | number | object> {
    data: TStream;
    resolve: (param: ParameterExpr<TStreamResult>) => void;
}
export declare abstract class CompositeStream<TStream = void, TStreamResult = string | number | object> extends CompositeBase<TStreamResult> {
    private process;
    constructor();
    aggregate(): void;
    /**
     * @param stream 스트림을
     */
    setStream(callback: (stream: CompositeStreamProtocol<TStream, TStreamResult>) => void): Disposable;
    /**
     * @param param 이벤트에 채울 정보.
     */
    readStream(expr: ParameterExpr<TStream>): Promise<TStreamResult> | undefined;
    /**
     * 콜백 연결을 모두 해지한다.
     */
    clear(): void;
    dispose(): void;
}
