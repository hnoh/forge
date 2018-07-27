import getTimeStampStatic from '../implement/getTimeStamp';
declare module '../extensionImpl' {
    interface MaltExtension {
        getTimeStamp: typeof getTimeStampStatic;
    }
}
