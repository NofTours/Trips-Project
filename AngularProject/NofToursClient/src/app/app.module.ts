import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { BookTripComponent } from './components/book-trip/book-trip.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { TripComponent } from './components/trip/trip.component';
import { DragDropModule as CDKDragDropModule } from '@angular/cdk/drag-drop';
import { SiteComponent } from './components/site/site.component';
import {DragDropModule} from 'primeng/dragdrop';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {OrderListModule} from 'primeng/orderlist';
import {DataViewModule} from 'primeng/dataview';
<<<<<<< HEAD
import {DropdownModule} from 'primeng/dropdown';
=======
>>>>>>> ba04f082dd63ef3f5b17cc0069ab09cbb0698159
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';




export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/:user', component: AdminComponent},
  {path: 'booktrip', component: BookTripComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'myTrips/:user', component: AdminComponent},
  {path: 'sites', component: SiteComponent}   
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
    ExampleComponent,
    BookTripComponent,
    TimePickerComponent,
    TripComponent,
    SiteComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    HttpClientModule,
    DragDropModule,
    PanelModule,
    TableModule,
    CDKDragDropModule,
    PickListModule,
    OrderListModule,
    ListboxModule,
    DataViewModule,
    DropdownModule,
    CardModule
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);