import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  //constructor de typeOrm de inyeccion a las base de datos
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  //Metodo de Buscar usuario por nombre de usuario
  async findOne(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }
  //
}
