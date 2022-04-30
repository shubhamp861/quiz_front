import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../../../service/exam.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private _examAervice:ExamService,private matSnackBar:MatSnackBar) { }
  rowData;
  quizs;
  showAdd=true;
  addQuizData={
    title:"",
    description: "",
    maxMarks:"",
    noOfQuestion:"",
    categoryDto:{
      cid: '',
    }
  };
  categories;

  ngOnInit(): void {
    this._examAervice.getAllQuizz().subscribe((data:{title:string,description:string})=>{
      this.rowData = data;
      this.quizs = this.rowData.slice(0,5);
    });
    this._examAervice.getAllCategory().subscribe(data=>{
        this.categories = data;
      },
      (error => {
        console.log(error);
      }))
  }

  changePage=(event:PageEvent)=>{
     let startIndex = event.pageIndex*event.pageSize;
     let endindex =  startIndex + event.pageSize;
     if(endindex > this.rowData.length){
       endindex = this.rowData.length;
     }
     this.quizs = this.rowData.slice(startIndex,endindex);
  }

  addNewquizs=()=>{
    if(this.addQuizData.title != null && this.addQuizData.title != ''
      && this.addQuizData.description != null && this.addQuizData.description != ''
      && this.addQuizData.maxMarks != null && this.addQuizData.maxMarks != ''
      && this.addQuizData.noOfQuestion != null && this.addQuizData.noOfQuestion != ''
      && this.addQuizData.categoryDto.cid != null && this.addQuizData.categoryDto.cid != ''){
      this._examAervice.addNewquizs(this.addQuizData).subscribe((data)=>{
          this.matSnackBar.open("New quizs Added","",{duration:3000});
          this.addQuizData={
            title:"",
            description: "",
            maxMarks:"",
            noOfQuestion:"",
            categoryDto:{
              cid: '',
            }
          };
          this._examAervice.getAllQuizz().subscribe((data:{title:string,description:string})=>{
            this.rowData = data;
            this.quizs = this.rowData.slice(0,5);
          });
        },
        (error => {
          this.matSnackBar.open("Internal Server Error","",{duration:3000});
        }));
    }
    else{
      this.matSnackBar.open("Empty field not allowed","",{duration:3000});
    }
  }

  update=(id)=>{
     this._examAervice.getQuizById(id).subscribe((value:any)=>this.addQuizData=value);
     this.showAdd = !this.showAdd;
  }

  delete=(id)=>{
     this._examAervice.deleteQuizById(id).subscribe(
       console.log
     )
    this._examAervice.getAllQuizz().subscribe((data:{title:string,description:string})=>{
      this.rowData = data;
      this.quizs = this.rowData.slice(0,5);
    });
  }
}
