import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    userName: string
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    firstName: string
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    lastName: string
}
