import * as OtpGenerator from 'otp-generator';
import * as bcrypt from 'bcrypt';

export class AuthHelper {
    //Generate Numeric OTP
    public generateNumericOtp(length: number = 6): string {
        return OtpGenerator.generate(
            length,
            {
                specialChars: false,
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                digits: true
            }
        );
    }

    // Encode User Password
    public encodePassword(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);

        return bcrypt.hashSync(password, salt);
    }

    // Validate User's password
    public isPasswordValid(password: string, userPassword: string): boolean {
        return bcrypt.compareSync(password, userPassword);
    }
}