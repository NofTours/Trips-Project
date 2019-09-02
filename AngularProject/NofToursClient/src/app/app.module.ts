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

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/:user', component: AdminComponent}
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
    UserUpdatesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
    
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);