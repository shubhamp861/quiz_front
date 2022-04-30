import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExamService} from '../../../../service/exam.service';
// import {} from '../../../../../assets/quiz.png';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  constructor(private activated:ActivatedRoute,private examService:ExamService) { }
  QuizData=[];
  ngOnInit(): void {
    this.activated.paramMap.subscribe(params=>{
      this.examService.getAllQuizz().subscribe(
        (data:any)=>{
          this.QuizData = data.filter(value=> value.categoryDto.cid == params.get('id'));
        }
      )
    })
  }

}
