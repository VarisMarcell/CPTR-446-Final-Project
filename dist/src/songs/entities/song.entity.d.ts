import { Collection } from "@mikro-orm/core";
import { CreateSongDto } from "../dto/create-song.dto";
import { Playlist } from "../../playlists/entities/playlist.entity";
import { User } from "../../users/entities/user.entity";
export declare class Song {
    constructor(createSongDto: CreateSongDto);
    readonly id: number;
    name: string;
    artist: string;
    duration: string;
    key: string;
    BPM: number;
    year: number;
    genre: string;
    link: string;
    playlists: Collection<Playlist, object>;
    users: Collection<User, object>;
}
