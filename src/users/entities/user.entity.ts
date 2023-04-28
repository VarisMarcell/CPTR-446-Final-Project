import { Entity, PrimaryKey, Property, OneToMany, Collection, OneToOne, ManyToMany } from "@mikro-orm/core";
import { CreateUserDto } from "../dto/create-user.dto";
import * as crypto from 'crypto'
import { Playlist } from "../../playlists/entities/playlist.entity";
import { Song } from "../../songs/entities/song.entity";

@Entity()
export class User {
    constructor(createUserDto: CreateUserDto) {
        this.userName = createUserDto.userName
        this.firstName = createUserDto.firstName
        this.lastName = createUserDto.lastName
        // this.queue = new Queue(this)
    }

    @PrimaryKey({
        autoincrement: true,
    })
    readonly id!: number

    @Property({
        length: 64,
        hidden: true,
        index: true
    })
    readonly apiKey: string = crypto.randomBytes(32).toString("hex")

    @Property({
        length: 64
    })
    userName!: string

    @Property({
        length: 64
    })
    firstName!: string

    @Property({
        length: 64
    })
    lastName!: string

    @OneToMany(() => Playlist, playlist => playlist.user)
    playlists = new Collection<Playlist>(this);

    @ManyToMany({
        entity: () => Song,
        mappedBy: (song) => song.users,
        fixedOrder: true
    })
    queue = new Collection<Song>(this);

    // @Property()
    // role_id: number
}

