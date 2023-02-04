import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { MailModule } from './shared/mail/mail.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ApiModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
