import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const [req, res, next] = context.getArgs();
    const authHeader: string = req.headers?.authorization ?? '';
    
    const token: string = authHeader?.replace('Bearer ', '');
    const auth: string = Buffer.from(token, 'base64').toString();
    const credentials: string[] = auth.split(':');

    console.log(credentials);
    
    return true;
  }
}
