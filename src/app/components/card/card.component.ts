import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../../models/item.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public item: IItem;

  @Input()
  public isMultiple: boolean;

  constructor( public matDialog: MatDialog ) { }

  ngOnInit() {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.item;
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

}
