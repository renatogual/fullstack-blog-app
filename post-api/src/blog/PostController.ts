import { Controller, Get, Post, Body } from "@nestjs/common";
import { Observable } from "rxjs";
import { PostService } from "./services/PostService";
import { PostEntity } from "./entities/PostEntity";
import { CreatePostDto } from "./dtos/CreatePostDto";

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {

    }

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }
}