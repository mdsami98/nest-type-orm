import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  signUp(@Body() body: CreateUserDto) {
    return this.userService.create(body.email, body.password);
  }
}
