import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/userDto.dto';

@Module({
  //importante typeOrm al implementarlo se necesita importar las entidades.
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
