import deepEqualStatic from '../implement/deepEqual';

declare module '../extensionImpl' {
    // todo --sky`
    interface MaltExtension {
        deepEqual: typeof deepEqualStatic;
    }
}
