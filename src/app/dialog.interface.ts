import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface IModal {
  name: string;
  price: number
}

@Component ({
  selector: 'dialog',
  template:
  `<h1 mat-dialog-title>Invoice</h1>
  <div mat-dialog-content>
  </div>
  <div mat-dialog-actions>
       <button mat-button>Ok</button>
  </div>`
})

export class Modal {
  name: string;
  price: number;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(Modal, {
      width: "600px",
      data: {name: this.name, price: this.price}
    });
  }

}
