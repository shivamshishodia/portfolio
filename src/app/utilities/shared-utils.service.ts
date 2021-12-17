import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedUtils {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  messageAlert(message: string, action: string, time: number) {
    this.snackbar.open(message, action, {
      duration: time
    });
  }

}
