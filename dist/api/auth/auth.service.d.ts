import { UserEntity } from '../../shared/database/entities';
import { SignUpDto, VerifyUserDto } from '../../shared/dto';
import { Repository } from 'typeorm';
import { AuthHelper } from './auth.helper';
export declare class AuthService {
    private readonly authHelper;
    private readonly userRepository;
    constructor(authHelper: AuthHelper, userRepository: Repository<UserEntity>);
    signUp(newUser: SignUpDto): Promise<string>;
    verifyUser(data: VerifyUserDto): Promise<string>;
}
