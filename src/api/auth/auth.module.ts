import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from '../../shared/database/entities';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy, RrefresTokenStrategy } from './strategies';
import { AuthHelper } from './auth.helper';
import { MailModule } from '../../shared/mail/mail.module';

@Module({
    imports: [
        JwtModule.register({}),
        TypeOrmModule.forFeature([UserEntity,]),
        MailModule
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthHelper, AccessTokenStrategy, RrefresTokenStrategy],
})

export class AuthModule { }
