import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './sharedComponent/navbar/navbar.component';
import { FooterComponent } from './sharedComponent/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule } from "@angular/material/icon";
import { authIntercetpterProvider } from './sharedComponent/intercepter/auth-intercepter.interceptor';
import { AdminPageComponent } from './component/dashbord/admin/admin-page/admin-page.component';
import { UserPageComponent } from './component/dashbord/user-page/user-page.component';
import { ProfileComponent } from './component/dashbord/common-pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SilebarComponent } from './component/dashbord/common-pages/silebar/silebar.component';
import { AdminlandingComponent } from './component/dashbord/admin/adminlanding/adminlanding.component';
import { CategoryViewComponent } from './component/dashbord/admin/category/category-view/category-view.component';
import { AddCategoryComponent } from './component/dashbord/admin/category/add-category/add-category.component';
import { QuizComponent } from './component/dashbord/admin/quiz/quiz.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { QuestionViewComponent } from './component/dashbord/admin/question-view/question-view.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidebarComponent } from './component/dashbord/user-page/sidebar/sidebar.component';
import { ViewQuizComponent } from './component/dashbord/user-page/view-quiz/view-quiz.component';
import { QuizStartUpComponent } from './component/dashbord/user-page/quiz-start-up/quiz-start-up.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdminPageComponent,
    UserPageComponent,
    ProfileComponent,
    SilebarComponent,
    AdminlandingComponent,
    CategoryViewComponent,
    AddCategoryComponent,
    QuizComponent,
    QuestionViewComponent,
    SidebarComponent,
    ViewQuizComponent,
    QuizStartUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatProgressSpinnerModule],
  providers: [authIntercetpterProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
