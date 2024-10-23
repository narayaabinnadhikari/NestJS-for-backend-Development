import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') //  /users
export class UsersController {

    @Get()  //  GET/users or /users?role=value&age=value etc
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' |'ADMIN') {
        return []
    }

    // Order is Important, it is like waterfall.
    // @Get('interns')  //  GET/users/interns
    // findAllInterns() {
    //     return []
    // }

    @Get(':id')  // GET /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()  //POST /users
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id')  // GET /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    
    @Delete(':id')  //   DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }
    
}
