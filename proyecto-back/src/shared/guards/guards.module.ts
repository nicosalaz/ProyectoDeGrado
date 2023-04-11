import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from 'src/api/usuario/usuario.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [UsuarioModule,AuthModule, JwtModule],
  providers: [AuthService],
})
export class GuardsModule {}