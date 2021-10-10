import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, MinLength} from 'class-validator';

export class CreateUserDto {
    @IsEmail({}, {message: 'Should be email'})
    @IsString({message: "Should be a string"})
    @ApiProperty({example: 'test@gmail.com', description: 'Email'})
    email: string;

    @MinLength(5, {message: 'Should have minimum 5 characters'})
    @IsString({message: "Should be a string"})
    @ApiProperty({example: '123123', description: 'User password'})
    password: string;
}