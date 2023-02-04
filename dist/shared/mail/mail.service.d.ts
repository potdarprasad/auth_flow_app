import { MailerService } from '@nestjs-modules/mailer';
import { SignUpDto } from 'src/shared/dto';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendOtp(user: SignUpDto, otp: string): Promise<void>;
}
