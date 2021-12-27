import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { CurrentUser } from './currentUser';

@Module({
  imports: [PassportModule.registerx({ defaultStrategy: 'jwt' })],
  providers: [JwtStrategy, CurrentUser],
  exports: [JwtStrategy, CurrentUser],
})
export class AuthModule {}
