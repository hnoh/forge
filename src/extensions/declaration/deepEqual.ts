import deepEqualStatic from '../implement/deepEqual';

declare module '../extensionImpl' {
    // todo --sky`
    interface Forge {
        deepEqual: typeof deepEqualStatic;
    }
}
