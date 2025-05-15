import { Logger, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/core-modules/auth/auth.module';
import { UserModule } from './modules/core-modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoleModule } from './modules/role/role.module';
import { CommonModule } from './common/common.module';
import config from './config/config';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config],
    }),
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        max: 100,
        ttl: 0,
        isGlobal: true,
        store: redisStore,
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<string>('REDIS_PORT'),
        username: configService.get<string>('REDIS_USER'), 
        password: configService.get<string>('REDIS_PASSWORD'),
        no_ready_check: true,
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UserModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
