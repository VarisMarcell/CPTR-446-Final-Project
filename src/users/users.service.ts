import { ForbiddenException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { User } from './entities/user.entity';
import { Loaded } from '@mikro-orm/core';
import { Song } from '../songs/entities/song.entity';
import { request } from 'express';


@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto)

    await this.em.persistAndFlush(user)

    return user
  }

  findAll(): Promise<Loaded<User[]>> {
    return this.em.find(User, {})
  }

  async findOne(id: number): Promise<Loaded<User>> {
    try {
      const user = await this.em.findOneOrFail(User, { id: id }, {
        populate: ['playlists', 'queue']
      })
      return user
    } catch (error) {
      throw new NotFoundException(`User with id ${id} not found.`)
    }
    // return this.em.findOneOrFail(User, {id: id})
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Loaded<User>> {
    try {
      const existingUser = await this.em.findOneOrFail(User, { id: id }, {populate: ['queue']})

      if (updateUserDto.userName) {
        existingUser.userName = updateUserDto.userName
      }
      if (updateUserDto.firstName) {
        existingUser.firstName = updateUserDto.firstName
      }
      if (updateUserDto.lastName) {
        existingUser.lastName = updateUserDto.lastName
      }
      if (updateUserDto.queue) {
        for (let songId of updateUserDto.queue) {
          existingUser.queue.add(this.em.getReference(Song, songId))   
          // const song = await this.em.findOne(Song, { id: songId })
          // if (song) {
          //   await this.em.remove(song)
          // } else {
          //   existingUser.queue.add(this.em.getReference(Song, songId))
          // }

          // for (let existingSong of existingUser.queue.getIdentifiers()) {
          //   console.log(`existingSong ${existingSong}`)
          //   if (songId === existingSong) {
          //     console.log('remove')
          //     existingUser.queue.remove(this.em.getReference(Song, songId))
          //     break;
          //   } else{
          //     console.log('add')
          //     existingUser.queue.add(this.em.getReference(Song, songId))
          //     break;
          //   }
          // }
          // if (songId in existingUser.queue) {
          // if (existingUser.queue.getItems().some(song => song.id === songId)) {
          //   existingUser.queue.remove(this.em.getReference(Song, songId))
          // } else {
          //   existingUser.queue.add(this.em.getReference(Song, songId))            
          // }
        }
      }

      await this.em.persistAndFlush(existingUser)
      return existingUser
    } catch (error) {
      throw new NotFoundException(`User with id ${id} not found.`)
    }
  }

  async remove(id: number): Promise<void> {
    this.em.removeAndFlush(this.em.getReference(User, id))
  }
}
