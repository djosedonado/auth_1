import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty({example:'danilo'})
  username: string;
  @ApiProperty({example:'123'})
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
