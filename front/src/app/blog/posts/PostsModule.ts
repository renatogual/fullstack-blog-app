import { NgModule } from '@angular/core';
import { PostListModule } from './list/PostListModule';
import { PostService } from './services/PostService';
import { PostResource } from './services/PostResource';
import { CreatePostDialogComponent } from './dialogs/CreatePostDialogComponent';
import { CommonMaterialModules } from 'src/app/common/material/CommonMaterialModules';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PostListModule,
        CommonModule,
        FormsModule,
        CommonMaterialModules
    ],
    exports: [
        PostListModule
    ],
    declarations: [
        CreatePostDialogComponent
    ],
    entryComponents: [
        CreatePostDialogComponent
    ],
    providers: [
        PostService,
        PostResource
    ],
})
export class PostsModule { }
