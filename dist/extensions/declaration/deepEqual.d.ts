import deepEqualStatic from '../implement/deepEqual';
declare module '../extensionImpl' {
    interface MaltExtension {
        deepEqual: typeof deepEqualStatic;
    }
}
