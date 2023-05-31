import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
    //este contructor es el que hace el llamdo de servicio que estan declarados en authServices.
  constructor(private authService: AuthService) {}

  //Metodo de Autenticacion de usuarios
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  //
}
