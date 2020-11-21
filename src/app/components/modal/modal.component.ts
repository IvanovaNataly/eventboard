import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { IItem } from '../../models/item.interface';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public item: IItem) { }

  ngOnInit() {
  }

  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
