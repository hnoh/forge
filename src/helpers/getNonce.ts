import { Subscription } from '../models/channel';

const nonceRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// 임의의 nonce생성 (간략버전)
export function getNonce (): string {
    let nonce = '';
    for (let i = 0; i < 20; i++) {
        nonce += nonceRange.charAt(Math.floor(Math.random() * nonceRange.length));
    }
    return nonce;
}

export function createUniqueNonce(source: Array<{nonce: string}>): string {
    let nonce: string;
    do {
        nonce = getNonce();
        if (source.findIndex(s => s.nonce === nonce) < 0) {
            return nonce;
        }
    }
    while (true);
}
