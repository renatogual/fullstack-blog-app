import { NgModule } from '@angular/core';
import { PostListComponent } from "./PostListComponent";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatButtonModule
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