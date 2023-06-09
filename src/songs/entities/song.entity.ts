import { Collection, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { CreateSongDto } from "../dto/create-song.dto";
import { Playlist } from "../../playlists/entities/playlist.entity";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Song {
    constructor(createSongDto: CreateSongDto) {
        this.name = createSongDto.name
        this.artist = createSongDto.artist
        this.duration = createSongDto.duration
        this.key = createSongDto.key
        this.BPM = createSongDto.BPM
        this.year = createSongDto.year
        this.genre = createSongDto.genre
        this.link = createSongDto.link
    }

    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property({
        length: 64
    })
    name!: string

    @Property({
        length: 32
    })
    artist!: string

    @Property({
        length: 16
    })
    duration!: string

    @Property({
        length: 4
    })
    key!: string

    @Property({
        length: 4
    })
    BPM!: number

    @Property({
        length: 4
    })
    year!: number

    @Property({
        length: 32
    })
    genre!: string

    @Property({
        length: 128
    })
    link!: string

    // @ManyToMany(() => Playlist)
    // playlists = new Collection<Playlist>(this);

    @ManyToMany({
        entity: () => Playlist,
        inversedBy: (playlist) => playlist.songs,
        fixedOrder: true
    })
    playlists = new Collection<Playlist>(this)

    @ManyToMany({
        entity: () => User,
        inversedBy: (user) => user.queue,
        fixedOrder: true
    })
    users = new Collection<User>(this);

    // I can't create songs independently of a playlist...
    // @ManyToOne({
    //     entity: () => Playlist,
    //     inversedBy: playlist => playlist.songs
    // })
    // playlist: Playlist

//    @OneToMany(() => Playlist, playlist => playlist.song)
//    playlists = new Collection<Playlist>(this);
}
