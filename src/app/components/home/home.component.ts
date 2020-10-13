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

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    // const theList$ = this.dataService.getData();
    // console.log(this.theList$);

    this.dataService.getData().subscribe( resp => {
      if (resp) {
        this.theList = this.composeTheList(resp);
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
      data.unshift(emptyItem);
    }
    const remainder = data.length % 7;

    if (remainder !== 0) {
      for (let i = 0; i < 7 - remainder; i++) {
        data.push(emptyItem);
      }
    }
    return data;
  }

}
