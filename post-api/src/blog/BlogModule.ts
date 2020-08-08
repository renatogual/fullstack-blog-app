import { Module } from "@nestjs/common";
import { PostService } from "./services/PostService";
import { PostController } from "./PostController";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'blog-user',
            password: 'blog123',
            database: 'blog-app',
            entities: [__dirname + '/**/*Entity{.ts,.js}'],
            synchronize: true,
        })
    ],
    controllers: [
        PostController
    ],
    providers: [
        PostService
    ],
  })
  export class BlogModule {
  }