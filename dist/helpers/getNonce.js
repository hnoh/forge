"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nonceRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// 임의의 nonce생성 (간략버전)
function getNonce() {
    let nonce = '';
    for (let i = 0; i < 20; i++) {
        nonce += nonceRange.charAt(Math.floor(Math.random() * nonceRange.length));
    }
    return nonce;
}
exports.getNonce = getNonce;
function createUniqueNonce(source) {
    let nonce;
    do {
        nonce = getNonce();
        if (source.findIndex(s => s.nonce === nonce) < 0) {
            return nonce;
        }
    } while (true);
}
exports.createUniqueNonce = createUniqueNonce;
//# sourceMappingURL=getNonce.js.map