import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './shared/mail/mail.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly mailService: MailService) {}

  @Get('hello')
  async getHello(): Promise<string> {
    console.log('aa')
    await this.mailService.sendOtp({firstName: 'Prasad', lastName: 'Potdar', email: 'prasadmpotdar22@gmail.com',password: 'pass'}, '12345');
    return this.appService.getHello();
  }
}
