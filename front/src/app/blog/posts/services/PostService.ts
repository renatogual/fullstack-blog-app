import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModel/PostListItem';
import { PostResource } from './PostResource';
import { CreatePostDto } from './dataModel/CreatePostDto';

@Injectable()
export class PostService {
    constructor(private postResource: PostResource) {
    }
    
    public getAllPostsItems(): Observable<PostListItem[]> {
        return this.postResource.findAll();
    }

    public createPost(createPostDto: CreatePostDto): Observable<CreatePostDto> {
        return this.postResource.create(createPostDto);
    }
}