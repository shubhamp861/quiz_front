import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../../../../service/exam.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  constructor(private _examAervice:ExamService) { }
  categories;
  ngOnInit(): void {
    this._examAervice.getAllCategory().subscribe(data=>{
      this.categories = data;
    },
      (error => {
        console.log(error);
      }))
  }
}
