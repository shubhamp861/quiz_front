import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../../../service/exam.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  category;
  constructor(private _examService:ExamService) { }

  ngOnInit(): void {
    this.category = this._examService.getAllCategory().subscribe(data=>this.category = data)
  }

}
