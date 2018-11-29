import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employee/employeedetail.component';
import { PagenotfoundComponent } from './employee/pagenotfound.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee.component';
import { EmployeechartComponent } from './employee/employeechart/employeechart.component';

const routes: Routes = [
    { path: 'employeeList', component: EmployeeComponent },
    { path: 'employeeDetail/:id', component: EmployeedetailComponent },
    { path: 'AddEmployee', component: CreateEmployeeComponent },
    { path: 'UpdateEmployee/:id', component: UpdateEmployeeComponent },
    { path: 'EmployeeChart', component: EmployeechartComponent },
    { path: '', component: EmployeeComponent },
    { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeedetailComponent,
    PagenotfoundComponent,
    CreateEmployeeComponent,
      UpdateEmployeeComponent,
      EmployeechartComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
