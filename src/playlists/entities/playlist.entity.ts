import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection, OneToMany } from "@mikro-orm/core";
import { CreatePlaylistDto } from "../dto/create-playlist.dto";
import { User } from "../../users/entities/user.entity";
import { Song } from "../../songs/entities/song.entity";

@Entity()
export class Playlist {
    constructor(createPlaylistDto: CreatePlaylistDto, user: User) {
        this.name = createPlaylistDto.name
        this.user = user
    }

    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property(({
        length: 64
    }))
    name!: string

    @ManyToOne({
        entity: () => User,
        inversedBy: user => user.playlists
    })
    user: User

    // @ManyToMany(() => Song)
    // songs = new Collection<Song>(this);

    @ManyToMany({
        entity: () => Song,
        mappedBy: (song) => song.playlists,
        fixedOrder: true
    })
    songs = new Collection<Song>(this);

    // @ManyToOne({
    //     entity: () => Song,
    //     inversedBy: song => song.playlists
    // })
    // song: Song

//     @OneToMany(() => Song, song => song.playlist)
//    songs = new Collection<Song>(this);
}
