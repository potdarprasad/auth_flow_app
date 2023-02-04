import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto, VerifyUserDto } from '../../shared/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('signup')
    signUp(@Body() user: SignUpDto){
        return this.authService.signUp(user);
    }

    @Post('verifyUser')
    verifyUser(@Body() user: VerifyUserDto){
        return this.authService.verifyUser(user);
    }

    @Post('resendOtp')
    resendOtp(@Body() user: VerifyUserDto){
        return this.authService.verifyUser(user);
    }
    
}
