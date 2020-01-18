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
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { MenuComponent } from './components/menu/menu.component';
import { DataSharingService } from './services/data-sharing.service';
import { TripService } from './services/trip.service';
import { SitesService } from './services/sites.service';
import { UsersService } from './services/users.service';
import { ViewTripsComponent } from './components/view-trips/view-trips.component';




export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'booktrip', component: BookTripComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'sites', component: SiteComponent},
  {path: 'trip', component: TripComponent},
  {path: 'viewTrips', component: ViewTripsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WarningDirective,
    ButtonHoverDirective,
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
    SiteComponent,
    MenuComponent,
    ViewTripsComponent  
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
    CardModule,
    ButtonModule,
    MenuModule
  ],
  providers: [TripService,SitesService,UsersService,DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);