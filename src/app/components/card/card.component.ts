import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../../models/item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public item: IItem;

  constructor() { }

  ngOnInit() {
  }

}
