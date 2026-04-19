import { Controller,Post,Body,Response } from '@nestjs/common';

import { LoginDto,RegisterDto } from './dto/auth.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}
    
    @Post('login')
    login(
        @Body() login:LoginDto,
        @Response() res) {
        return this.userService.signin(login,res);
    }

    @Post('register')
    register(@Body() register:RegisterDto,@Response() res) {
        return this.userService.signup(register,res);
    }
}
