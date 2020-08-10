import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Observable } from 'rxjs';
import { PostListItem } from '../services/dataModel/PostListItem';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostDialogComponent } from '../dialogs/CreatePostDialogComponent';

@Component({
  selector: 'app-post-list',
  templateUrl: 'postList.html',

})
export class PostListComponent implements OnInit {
  public postList: Observable<PostListItem[]>;
  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imageUrl'];

  constructor(private postService: PostService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.postList = this.postService.getAllPostsItems();
  }

  public createPost() {
    this.matDialog.open(CreatePostDialogComponent, {
      width: '600px'
    });
  }

}
