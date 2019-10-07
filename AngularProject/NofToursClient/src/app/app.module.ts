import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { WarningDirective } from './directives/warning.directive';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { HttpClientModule } from '@angular/common/http'
import { WebApiService } from './services/web-api.service';
import { AdminComponent } from './components/admin/admin.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortStrPipe } from './pipes/short-str.pipe';
import { UserComponent } from './components/user/user.component';
import { BgColorDirective } from './directives/bg-color.directive';
import { UserUpdatesComponent } from './components/user-updates/user-updates.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewcalendarComponent } from './components/newcalendar/newcalendar.component';
import { ExampleComponent } from './components/example/example.component';
;


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/:user', component: AdminComponent},
<<<<<<< HEAD
  {path: 'calendar', component: NewcalendarComponent},
  {path: 'example', component: ExampleComponent}
=======
  {path: 'myTrips/:user', component: AdminComponent}  
>>>>>>> 964f1bf6abb856bc22c3895e240dc042ac43deed
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WarningDirective,
    ButtonHoverDirective,
    AdminComponent,
    FilterPipe,
    ShortStrPipe,
    UserComponent,
    BgColorDirective,
    UserUpdatesComponent,
    NewcalendarComponent,
    ExampleComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    HttpClientModule
    
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);