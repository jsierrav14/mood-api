import { Injectable, NestMiddleware } from "@nestjs/common";
import { UsersService } from "../users.service";
import { NextFunction, Request } from "express";
import { User } from "../user.entity";

declare global{
    namespace Express{
      interface Request{
        currentUser?:User,
      }
    }
}
@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {

    constructor(private usersService: UsersService){}

    async use(req: Request, res:Response, next: NextFunction){
         //@ts-ignore
         const {userId} = req.session
         console.log("🚀 ~ CurrentUserMiddleware ~ use ~ userId:", userId)

         if(userId){
            const user = await this.usersService.findOne(userId);
            req.currentUser = user;
         }

         next();

    }
}