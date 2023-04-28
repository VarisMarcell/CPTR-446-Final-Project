import { ApiProperty } from "@nestjs/swagger"
import { IsString, MaxLength } from "class-validator"

export class CreateSongDto {
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    @IsString()
    @MaxLength(20)
    name: string

    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    artist: string
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    duration: string
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    key: string
    @ApiProperty({
        type: Number,
        description: "This is a required value."
    })
    BPM: number
    @ApiProperty({
        type: Number,
        description: "This is a required value."
    })
    year: number
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    genre: string
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    link: string
}
