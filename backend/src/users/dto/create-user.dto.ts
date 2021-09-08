import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'test@gmail.com', description: 'Email'})
    email: string;

    @ApiProperty({example: '123123', description: 'User password'})
    password: string;
}