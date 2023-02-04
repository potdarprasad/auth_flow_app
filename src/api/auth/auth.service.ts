import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../shared/database/entities';
import { SignUpDto, VerifyUserDto } from '../../shared/dto';
import { Repository } from 'typeorm';
import { AuthHelper } from './auth.helper';


@Injectable()
export class AuthService {
    constructor(
        private readonly authHelper: AuthHelper,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async signUp(newUser: SignUpDto){
        const user = await this.userRepository.findOneBy({email: newUser.email});

        if(user){
            throw new HttpException('User With This Email Already Exists', HttpStatus.CONFLICT);
        }

        newUser.password = this.authHelper.encodePassword(newUser.password);
        
        const otp = this.authHelper.generateNumericOtp();

        newUser = this.userRepository.create({otp, ...newUser});

        await this.userRepository.save(newUser);

        //:TODO Send Mail To User Email For OTP Verification

        return 'User Created Successfully';
    }

    async verifyUser(data: VerifyUserDto){
        const user = await this.userRepository.findOneBy({email: data.email});

        if(!user){
            throw new HttpException('Invalid User Email', HttpStatus.BAD_REQUEST);
        }

        if(data.otp === user.otp){
            await this.userRepository.update({email: data.email}, {isVerified: true, otp: null});
            return 'User Account Verified Successfully';
        }else{
            throw new HttpException('Invalid Otp', HttpStatus.BAD_REQUEST);
        }

    }
}
