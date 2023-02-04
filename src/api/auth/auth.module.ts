import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from '../../shared/database/entities';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy, RrefresTokenStrategy } from './strategies';
import { AuthHelper } from './auth.helper';

@Module({
    imports: [
        JwtModule.register({}),
        TypeOrmModule.forFeature([UserEntity,])
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthHelper, AccessTokenStrategy, RrefresTokenStrategy],
})

export class AuthModule { }
