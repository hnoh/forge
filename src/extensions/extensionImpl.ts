import './declaration/deepEqual';
import './declaration/getTimeStamp';

export interface ForgeExtension {

}

export function useExtension<T>(source: T): T & ForgeExtension {
    return this as T & ForgeExtension;
}
