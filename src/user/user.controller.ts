import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    allUsers() : string {
        return "List of users";
    }

    @Post()
    createUser() : string {
        return "User created"
    }
}
