import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorators/roles-auth.decorator";


@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector){}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );     
        
        if(!requiredRoles){
            return true
        }

        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if(!authHeader){
            throw new UnauthorizedException({
                message: "authHeader bo'sh"
            })
        }
        const bearer = authHeader.split(' ')[0]
        const token = authHeader.split(' ')[1];
        if(bearer !== 'Bearer' || !token){
            throw new UnauthorizedException({
                message: "Foydalanuvchi avtorizatsiyadan otmagan"
            })
        }

        let user: any;
        try {
            user = this.jwtService.verify(token);
        } catch (error) {
            throw new UnauthorizedException({
                message: "Foydalanuvchi avtorizatsiyadan otmagan"
            })
        }
        
        req.user = user;

        if(!user.isAdmin){
            throw new ForbiddenException({
                message: "Sizga ruxsat etilmaga"
            })
        }
        
        return true;
    }
    
}

