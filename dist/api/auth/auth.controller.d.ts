import { SignUpDto, VerifyUserDto } from '../../shared/dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(user: SignUpDto): Promise<string>;
    verifyUser(user: VerifyUserDto): Promise<string>;
    resendOtp(user: VerifyUserDto): Promise<string>;
}
