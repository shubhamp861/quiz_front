import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExamService} from '../../../../service/exam.service';
import {LocationStrategy} from '@angular/common';
import {PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start-up',
  templateUrl: './quiz-start-up.component.html',
  styleUrls: ['./quiz-start-up.component.css']
})
export class QuizStartUpComponent implements OnInit {


  constructor(private route:ActivatedRoute,private examService:ExamService,private location: LocationStrategy) { }

  quizData;
  showQuiz=false;
  rowQuestion;
  viewQuestion;
  markObtain=0;
  correctAnswer=0;
  totalTime=0;
  leftTime=0;
  result = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.examService.getQuizById(params.get('id')).subscribe((data:any)=>
        this.quizData = data
      )
    })
  };
  preventBack( ){
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }
  startQuiz(){

    this.showQuiz=!this.showQuiz;
    this.examService.getQuestionForQuiz(this.quizData.qid).subscribe(
      (value:any) => {
        console.log(value.length)
        this.totalTime = value.length*2*60;
        this.leftTime = this.totalTime;
        this.rowQuestion = value;
        this.rowQuestion.forEach(value=>{
          value['givenAnswer']='';
        })
        this.viewQuestion = this.rowQuestion;
        this.startTimer();
       // console.log(this.viewQuestion);
      }
    )
  }
  changePage=(event:PageEvent)=>{
    let startIndex = event.pageIndex*event.pageSize;
    let endindex =  startIndex + event.pageSize;
    if(endindex > this.rowQuestion.length){
      endindex = this.rowQuestion.length;
    }
    this.viewQuestion = this.rowQuestion.slice(startIndex,endindex);
  }
  Submit=()=>{
    Swal.fire({
      title:"Ready to Submit ?",
      showCancelButton:true,
      confirmButtonText:"Save",
      denyButtonText:"Continue",
      icon:"info"
    }).then(e=>{
      if(e.isConfirmed){
        this.result =  true;
        this.rowQuestion.forEach(value=>{
          if(value.givenAnswer == value.answer){
            this.correctAnswer++;
            let marksPerQuestion = this.quizData.maxMarks/this.rowQuestion.length;
            this.markObtain += marksPerQuestion;

          }
        });
      }
    })
}

  get spin(){
    return ((this.leftTime-20/this.totalTime)*100).toPrecision(2);
  }

  get formateTime(){
    let mm = Math.floor(this.leftTime/60);
    let  ss = this.leftTime - mm *60;
   return `${mm} Min : ${ss} Sec`;
  }
  startTimer=()=>{
    let t = setInterval(()=>{
      if(this.leftTime<=0){
        this.autoSave();
        clearInterval(t);
      }
      else {
        this.leftTime--;
       // this.result =  true;
      }
    },1000);
  }

  autoSave(){
    this.result =  true;
    this.rowQuestion.forEach(value=>{
      if(value.givenAnswer == value.answer){
        this.correctAnswer++;
        let marksPerQuestion = this.quizData.maxMarks/this.rowQuestion.length;
        this.markObtain += marksPerQuestion;
        this.startQuiz();
      }
    });
  }

}
