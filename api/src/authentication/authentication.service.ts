import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

@Injectable()
export class AuthenticationService {
  RSA_PUBLIC_KEY = fs.readFileSync('./src/keys/jwtRS256.key.pub');

  async validateToken(token: string): Promise<any> {
    try {
      const decoded = jwt.verify(token, this.RSA_PUBLIC_KEY, {
        algorithms: ['RS256'],
      });
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
