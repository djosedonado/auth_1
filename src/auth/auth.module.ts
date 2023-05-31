import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controlles/auth/auth.controller';

@Module({
  imports:[UserModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
