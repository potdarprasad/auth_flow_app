"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHelper = void 0;
const OtpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
class AuthHelper {
    generateNumericOtp(length = 6) {
        return OtpGenerator.generate(length, {
            specialChars: false,
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            digits: true
        });
    }
    encodePassword(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    isPasswordValid(password, userPassword) {
        return bcrypt.compareSync(password, userPassword);
    }
}
exports.AuthHelper = AuthHelper;
//# sourceMappingURL=auth.helper.js.map