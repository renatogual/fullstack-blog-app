import { Injectable } from '@angular/core';
import { ApiConfig } from '../../ApiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModel/PostListItem';
import { CreatePostDto } from './dataModel/CreatePostDto';

@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url + '/posts';

    constructor(private httpClient: HttpClient) {
    }
    
    public findAll(): Observable<PostListItem[]> {
        return this.httpClient.get(this.URL) as Observable<PostListItem[]>;
    }

    public create(createPostDto: CreatePostDto): Observable<CreatePostDto> {
        return this.httpClient.post(this.URL, createPostDto) as Observable<CreatePostDto>;
    }
}
