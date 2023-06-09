"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsService = void 0;
const common_1 = require("@nestjs/common");
const mysql_1 = require("@mikro-orm/mysql");
const playlist_entity_1 = require("./entities/playlist.entity");
const song_entity_1 = require("../songs/entities/song.entity");
let PlaylistsService = class PlaylistsService {
    constructor(em) {
        this.em = em;
    }
    async create(createPlaylistDto, user) {
        const playlist = new playlist_entity_1.Playlist(createPlaylistDto, user);
        await this.em.persistAndFlush(playlist);
        return playlist;
    }
    findAll() {
        return this.em.find(playlist_entity_1.Playlist, {});
    }
    findOne(id) {
        const playlist = this.em.findOneOrFail(playlist_entity_1.Playlist, { id: id }, { populate: ['songs'] });
        return playlist;
    }
    async update(id, updatePlaylistDto) {
        const playlist = await this.em.findOne(playlist_entity_1.Playlist, { id: id }, { populate: ['songs'] });
        if (!playlist) {
            throw new common_1.NotFoundException(`Playlist with id ${id} not found.`);
        }
        if (updatePlaylistDto.name) {
            playlist.name = updatePlaylistDto.name;
        }
        if (updatePlaylistDto.songs) {
            for (let song of updatePlaylistDto.songs) {
                playlist.songs.add(this.em.getReference(song_entity_1.Song, song));
            }
        }
        await this.em.persistAndFlush(playlist);
        return playlist;
    }
    async remove(id) {
        this.em.removeAndFlush(this.em.getReference(playlist_entity_1.Playlist, id));
    }
};
PlaylistsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_1.EntityManager])
], PlaylistsService);
exports.PlaylistsService = PlaylistsService;
//# sourceMappingURL=playlists.service.js.map