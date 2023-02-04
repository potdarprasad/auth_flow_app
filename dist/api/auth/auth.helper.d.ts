export declare class AuthHelper {
    generateNumericOtp(length?: number): string;
    encodePassword(password: string): string;
    isPasswordValid(password: string, userPassword: string): boolean;
}
