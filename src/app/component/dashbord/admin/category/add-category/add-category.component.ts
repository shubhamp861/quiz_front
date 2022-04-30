import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../../../../service/exam.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private _examAervice:ExamService,private matSnackBar:MatSnackBar) { }
  category={
    title:'',
    description:''
  }
  ngOnInit(): void {
  }
  addNewCategory(){
    if(this.category.title != null && this.category.title != '' && this.category.description != null && this.category.description != ''){
    this._examAervice.addNewCategory(this.category).subscribe((data)=>{
        this.matSnackBar.open("New Category Added","",{duration:3000});
        this.category={
          title:'',
          description:''
        }
      },
      (error => {
        this.matSnackBar.open("Internal Server Error","",{duration:3000});
      }));
  }
    else{
      this.matSnackBar.open("Empty field not allowed","",{duration:3000});
    }
  }
}
