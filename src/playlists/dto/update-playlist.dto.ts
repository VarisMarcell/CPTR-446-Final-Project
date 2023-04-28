import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaylistDto } from './create-playlist.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlaylistDto extends PartialType(CreatePlaylistDto) {
    @ApiProperty({
        type: String,
        description: "This is a required value."
    })
    name: string
    @ApiProperty({
        type: Array<Number>,
        description: "This is a required value."
    })
    songs: Array<number>
}
