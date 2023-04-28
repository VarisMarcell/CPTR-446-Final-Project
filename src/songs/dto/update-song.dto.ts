import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSongDto extends PartialType(CreateSongDto) {
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
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
    @ApiProperty({
        type: Array<Number>,
        description: "This is a required value."
    })
    playlists: Array<number>
}
