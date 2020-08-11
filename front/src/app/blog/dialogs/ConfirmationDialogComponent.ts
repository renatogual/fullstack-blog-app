import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: 'confirmationDialog.html'
})

export class ConfirmationDialogComponent {
    constructor(private dialogRef: MatDialogRef<void>) {
    }

    public submit() {
        this.dialogRef.close(true);
    }
}