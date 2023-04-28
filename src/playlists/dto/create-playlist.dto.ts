import { ApiProperty } from "@nestjs/swagger"


export class CreatePlaylistDto {
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    name: string
    // user_id: number
}
