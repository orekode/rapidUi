
import { AES, enc } from "crypto-js";

const secrete = 'divination';

export const encrypt = (value) => {
    const ecrypted_value = AES.encrypt(`${value}`, secrete);
    return ecrypted_value.toString().replaceAll('/', '_jxtx_');
}

export const decrypt = (value) => {
    const decrypted_value = AES.decrypt(value.replaceAll('_jxtx_', '/'), secrete);
    return decrypted_value.toString(enc.Utf8);
}