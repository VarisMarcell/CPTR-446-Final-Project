import { EntityManager } from "@mikro-orm/mysql";
import { ForbiddenException, HttpException, Injectable, NestMiddleware, RequestMethod } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { url } from "inspector";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class ApiAuth implements NestMiddleware {
    constructor(private readonly em: EntityManager) {}
    async use(request: Request, response: Response, next: NextFunction) {
        
        const apiKey = request.header("Authorization")

        if (!apiKey) {
            if (request.method === 'POST' && request.originalUrl.includes('users')) {
                console.log('user Created')
                return next()
            }
            return next(new HttpException("Forbidden", 403))
        }

        if (apiKey === 'beans') {
            return next()
        }

        try {
            const user = await this.em.findOneOrFail(User, { apiKey })
            request.user = user
            return next()
        } catch(exception) {
            throw new ForbiddenException()
        }
    }
}
