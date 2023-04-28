import { CreateSongDto } from './create-song.dto';
declare const UpdateSongDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSongDto>>;
export declare class UpdateSongDto extends UpdateSongDto_base {
    name: string;
    artist: string;
    duration: string;
    key: string;
    BPM: number;
    year: number;
    genre: string;
    link: string;
    playlists: Array<number>;
}
export {};
