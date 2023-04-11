import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NestMiddleware,
  Next,
  Req,
  Res,
} from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import Base64 from 'crypto-js/enc-base64';
import CryptoJS from 'crypto-js/core';
import { AuthService } from 'src/auth/auth.service';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BasicAuthMiddleware implements NestMiddleware {
  constructor(private moduleRef: ModuleRef, private authService: AuthService) {}

  async use(
    @Req() request: Request,
    @Res() response: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    const authHeader: string = request.headers?.authorization ?? '';
    const basic: boolean = authHeader?.toLocaleLowerCase().includes('basic');

    if (basic) {
      const token: string = authHeader?.replace('Basic ', '');
      const auth: string = Buffer.from(token, 'base64').toString();
      const credentials: string[] = auth.split(':');
      console.log(credentials);
    
    }
    next();
  }
}
