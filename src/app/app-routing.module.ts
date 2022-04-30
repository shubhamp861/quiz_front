import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {UserPageComponent} from './component/dashbord/user-page/user-page.component';
import {AdminPageComponent} from './component/dashbord/admin/admin-page/admin-page.component';
import {DashboradCheckGuard} from './sharedComponent/gaurd/dashborad-check.guard';
import {ProfileComponent} from './component/dashbord/common-pages/profile/profile.component';
import {AdminlandingComponent} from './component/dashbord/admin/adminlanding/adminlanding.component';
import {CategoryViewComponent} from './component/dashbord/admin/category/category-view/category-view.component';
import {AddCategoryComponent} from './component/dashbord/admin/category/add-category/add-category.component';
import {QuizComponent} from './component/dashbord/admin/quiz/quiz.component';
import {QuestionViewComponent} from './component/dashbord/admin/question-view/question-view.component';
import {ViewQuizComponent} from './component/dashbord/user-page/view-quiz/view-quiz.component';
import {QuizStartUpComponent} from './component/dashbord/user-page/quiz-start-up/quiz-start-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'USER', component: UserPageComponent, children: [
      {path: '',component: ProfileComponent},
      {path: 'view-quiz/:id',component: ViewQuizComponent},
      {path: 'instructe/:id',component: QuizStartUpComponent}
    ]},
  {
    path: 'ADMIN', component: AdminPageComponent, canActivate: [DashboradCheckGuard],
    children: [
      // {path: '', component: AdminlandingComponent},
      {path: '', component: ProfileComponent},
      {path: 'view-category', component: CategoryViewComponent},
      {path: 'add-category', component: AddCategoryComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'question/:id/:title', component: QuestionViewComponent}
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
