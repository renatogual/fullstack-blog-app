import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatCardModule,
        MatInputModule
    ],
    exports: [
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatCardModule,
        MatInputModule
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules {
}