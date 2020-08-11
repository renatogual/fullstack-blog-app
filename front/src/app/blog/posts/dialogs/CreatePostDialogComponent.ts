import { Component, Inject, OnInit } from '@angular/core';
import { CreatePostDto } from '../services/dataModel/CreatePostDto';
import { PostService } from '../services/PostService';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPostDto } from '../services/dataModel/EditPostDto';
import * as _ from 'lodash';

@Component({
    selector: 'app-create-post-dialog',
    templateUrl: 'createPostDialog.html'
})

export class CreatePostDialogComponent implements OnInit{
    public newPostModel: CreatePostDto = {} as CreatePostDto;
    public isLoading: false;
    public isEditing: boolean;

    constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>, 
        @Inject (MAT_DIALOG_DATA) public data: {editPostDto: EditPostDto},
        private postService: PostService) {
    }

    ngOnInit(): void {
        this.isEditing = !!_.get(this.data, 'editPostDto');
        console.log(this.isEditing, this.data);
    }

    public submit(form: NgForm) {
        if (form.valid) {
            this.postService.createPost(this.newPostModel)
                .pipe(finalize(() => this.isLoading = false))
                .subscribe((response) => {
                    this.dialogRef.close(response);
                });
        }
    }
}