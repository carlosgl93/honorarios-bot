"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionService = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-key-change-in-production';
exports.encryptionService = {
    encrypt(text) {
        return crypto_js_1.default.AES.encrypt(text, ENCRYPTION_KEY).toString();
    },
    decrypt(encryptedText) {
        const bytes = crypto_js_1.default.AES.decrypt(encryptedText, ENCRYPTION_KEY);
        return bytes.toString(crypto_js_1.default.enc.Utf8);
    },
    hashRut(rut) {
        return crypto_js_1.default.SHA256(rut).toString();
    },
};
//# sourceMappingURL=encryption.js.map