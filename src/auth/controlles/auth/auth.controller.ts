import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  //este contructor es el que hace el llamdo de servicio que estan declarados en authServices.
  constructor(private authService: AuthService) {}

  //Metodo de Autenticacion de usuarios
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  // Pruebas de Modelo
  @UseGuards(AuthGuard)//tenecr cuidado al momento de usar este metodo ya que tiene que importar el guards que creoo
  @Get('Get')
  getProfile(@Request() req) {
    return req.user;
  }
}
