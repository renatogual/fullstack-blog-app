import { NgModule } from "@angular/core";
import { PostListComponent } from './PostListComponent';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: [],
})
export class PostListModule {
}