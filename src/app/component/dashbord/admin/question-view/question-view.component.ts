import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExamService} from '../../../../service/exam.service';
import {PageEvent} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  id;
  title;
  rowQuestion;
  rowData;
  viewQuestion=false;
  addQuizData={
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quizDto:{
      qid:null
    }
  };
  categories;
  constructor(private activeRout:ActivatedRoute,private _examService:ExamService, private matSnackBar:MatSnackBar ) {
    this.id = this.activeRout.snapshot.params.id;
    this.title = this.activeRout.snapshot.params.title;
  }

  ngOnInit(): void {
    console.log(this.id+this.title );
    this._examService.getQuestionForQuiz(this.id).
      subscribe(data=>
    {this.rowData = data;
    this.rowQuestion = this.rowData.slice(0,10)});

    this._examService.getAllQuizz().subscribe(data=>{
      this.categories = data;
    });
  }

  changePage=(event:PageEvent)=>{
    let startIndex = event.pageIndex*event.pageSize;
    let endindex =  startIndex + event.pageSize;
    if(endindex > this.rowData.length){
      endindex = this.rowData.length;
    }
    this.rowQuestion = this.rowData.slice(startIndex,endindex);
  }

  addNewQuestion=()=>{
    if(this.addQuizData.content != null && this.addQuizData.content != ''
      && this.addQuizData.option1 != null && this.addQuizData.option1 != ''
      && this.addQuizData.option2 != null && this.addQuizData.option2 != ''
      && this.addQuizData.option3 != null && this.addQuizData.option3 != ''
      && this.addQuizData.option4 != null && this.addQuizData.option4 != ''
      && this.addQuizData.quizDto.qid != null && this.addQuizData.quizDto.qid != ''){
      this._examService.addQuestion(this.addQuizData).subscribe((data)=>{
          this.matSnackBar.open("New question Added","",{duration:3000});
          this.addQuizData=
            {
              content:'',
              image:'',
              option1:'',
              option2:'',
              option3:'',
              option4:'',
              answer:'',
              quizDto:{
                qid:null
              }
            };
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
