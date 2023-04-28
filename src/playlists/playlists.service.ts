import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { Loaded } from '@mikro-orm/core';
import { Playlist } from './entities/playlist.entity';
import { User } from '../users/entities/user.entity';
import { Song } from '../songs/entities/song.entity';

@Injectable()
export class PlaylistsService {
  constructor(private readonly em: EntityManager) {}
  
  async create(createPlaylistDto: CreatePlaylistDto, user: User): Promise<Playlist> {
    const playlist = new Playlist(createPlaylistDto, user)

    await this.em.persistAndFlush(playlist)
    return playlist
  }

  // async addSong()

  findAll(): Promise<Loaded<Playlist[]>> {
    return this.em.find(Playlist, {})
  }

  findOne(id: number): Promise<Loaded<Playlist>> {
    const playlist = this.em.findOneOrFail(Playlist, {id: id}, {populate: ['songs']})
    return playlist
  }


  async update(id: number, updatePlaylistDto: UpdatePlaylistDto): Promise<Loaded<Playlist>> {
    const playlist = await this.em.findOne(Playlist, {id: id}, {populate: ['songs']})

    if (!playlist) {
      throw new NotFoundException(`Playlist with id ${id} not found.`)
    }

    if (updatePlaylistDto.name) {
      playlist.name = updatePlaylistDto.name
    }
    if (updatePlaylistDto.songs) {
      for (let song of updatePlaylistDto.songs) {
        playlist.songs.add(this.em.getReference(Song, song))
      }
    }
 
    await this.em.persistAndFlush(playlist)
    return playlist
  }


  async remove(id: number): Promise<void> {
    this.em.removeAndFlush(this.em.getReference(Playlist, id))
  }
}
