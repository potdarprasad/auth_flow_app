import { UserEntity } from '../../shared/database/entities';
import { SignUpDto, VerifyUserDto } from '../../shared/dto';
import { Repository } from 'typeorm';
import { AuthHelper } from './auth.helper';
import { MailService } from '../../shared/mail/mail.service';
export declare class AuthService {
    private readonly authHelper;
    private readonly userRepository;
    private readonly mailService;
    constructor(authHelper: AuthHelper, userRepository: Repository<UserEntity>, mailService: MailService);
    signUp(newUser: SignUpDto): Promise<string>;
    verifyUser(data: VerifyUserDto): Promise<string>;
    resendVerifyOtpMail(): Promise<void>;
}
