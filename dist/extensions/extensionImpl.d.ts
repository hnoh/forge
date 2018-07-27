import './declaration/deepEqual';
import './declaration/getTimeStamp';
export interface ForgeExtension {
}
export declare function useExtension<T>(source: T): T & ForgeExtension;
