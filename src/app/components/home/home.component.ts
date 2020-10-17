import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/index';
import { IItem, IDate } from '../../models/index';

@Component({
  selector: 'app-home.component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // public theList$: Observable<any[]>;

  public theList: Array<IItem>;
  public inactiveRowHeight: number;
  public rowsHeight: Array<string>;
  public errorMessageColor = 'red';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getList();
    this.inactiveRowHeight = 7;
    this.rowsHeight = [];
  }

  getList() {
    // const theList$ = this.dataService.getData();
    // console.log(this.theList$);

    this.dataService.getData().subscribe( resp => {
      if (resp) {
        this.theList = this.composeTheList(resp);
        this.defineWeeks();
        this.defineRowsHeight();
        console.log(this.theList);
      }
    });
  }

  composeTheList(data: Array<IItem>): Array<IItem> {
    const firstWeekDay = 4;
    let emptyItem: IItem = {
      isActive: false
    };
    for (let i = firstWeekDay - 1; i > 0; i--) {
      data.unshift(JSON.parse(JSON.stringify(emptyItem)));
    }
    const remainder = data.length % 7;
    if (remainder !== 0) {
      for (let i = 0; i < 7 - remainder; i++) {
        data.push(JSON.parse(JSON.stringify(emptyItem)));
      }
    }
    return data;
  }

  defineWeeks(): void {
    let counter = 1;
    for (let i = 0; i <= this.theList.length - 1; i++) {
      this.theList[i].weekIndex = counter;
      const index = (i + 1) % 7 ;
      if ( index === 0) {
        counter++;
      }
    }
  }

  defineRowsHeight(): void {
    const inactiveRowHeight = this.inactiveRowHeight + 'em';
    const activeRowHeight = this.inactiveRowHeight * 2 + 'em';
    this.theList.forEach( item =>  {
      const index = item.weekIndex - 1;
      if (!item.isActive && this.rowsHeight[index] !== activeRowHeight) {
        this.rowsHeight[index] = inactiveRowHeight;
      }
      else {
        this.rowsHeight[index] = activeRowHeight;
      }
    });
    console.log(this.rowsHeight);
  }
}
