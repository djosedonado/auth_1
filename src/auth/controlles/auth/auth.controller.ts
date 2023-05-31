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
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { UserDto } from 'src/user/dto/userDto.dto';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  //este contructor es el que hace el llamdo de servicio que estan declarados en authServices.
  constructor(private authService: AuthService) {}

  //Metodo de Autenticacion de usuarios
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiOkResponse({ type: UserDto })
  @ApiBadRequestResponse({ description: 'Invalid credentials' })
  signIn(@Body() signInDto: UserDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  // Pruebas de Modelo
  @UseGuards(AuthGuard)//tenecr cuidado al momento de usar este metodo ya que tiene que importar el guards que creoo
  @Get('Get')
  getProfile(@Request() req) {
    return req.user;
  }
}
