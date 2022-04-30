import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  baseURL = "http://localhost:8080";
  constructor(private _http:HttpClient) {}

  getAllCategory=()=>{
    return this._http.get(`${this.baseURL}/category/getAllCategory`);
  }

  addNewCategory=(category)=>{
    return this._http.post(`${this.baseURL}/category/add`,category);
  }

  getAllQuizz=()=>{
    return this._http.get(`${this.baseURL}/quiz/getAllQuiz`);
  }

  addNewquizs=(quizs: any)=> {
     return this._http.post(`${this.baseURL}/quiz/add`,quizs);
  }

  getQuizById=(id)=>{
     return this._http.get(`${this.baseURL}/quiz/getQuiz/${id}`);
  }

  deleteQuizById=(id)=>{
    return this._http.delete(`${this.baseURL}/quiz/delete/${id}`);
  }

  getQuestionForQuiz=(id)=>{
    return this._http.get(`${this.baseURL}/quiz/getAllQuestionForQuiz/${id}`);
  }
  addQuestion=(addQuestion)=>{
    return this._http.post(`${this.baseURL}/question/add`,addQuestion);
  }
}
