import { UserEntity } from '../../shared/database/entities';
import { SignUpDto, VerifyUserDto } from '../../shared/dto';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    signUp(newUser: SignUpDto): Promise<string>;
    verifyUser(data: VerifyUserDto): Promise<string>;
    resendOtp(data: VerifyUserDto): Promise<void>;
    generateNumericOtp(): any;
}
