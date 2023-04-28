import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) { 
    @ApiProperty({
        type: String,
        description: "Username value."
    })   
    userName: string
    @ApiProperty({
        type: String,
        description: "First name."
    })
    firstName: string
    @ApiProperty({
        type: String,
        description: "Last name."
    })
    lastName: string
    @ApiProperty({
        type: Array<Number>,
        description: "Add songs to the queue. Duplicates won't be included. (v1.1)"
    })
    queue: Array<number>
}
