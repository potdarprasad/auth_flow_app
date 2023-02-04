import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../shared/config/database.config';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(AppDataSource.options),
        AuthModule,
    ],
})
export class ApiModule { }
