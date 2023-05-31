import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  
  constructor(id:number,username: string, password: string) {
    this.id = id;
    this.password = username;
    this.username = password;
  }
  
}
