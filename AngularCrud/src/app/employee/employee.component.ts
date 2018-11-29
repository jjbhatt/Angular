import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'
import {Employee} from './employee'
import {Router} from '@angular/router'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


    employees: Employee[];
    IsEmployeeDeleted: any;
    display = 'none'; //default Variable --- for Dialog
    employeeIdToDelete: any;

    constructor(private employeeService: EmployeeService, private _router: Router) { }

    ngOnInit() {

        this.getAllEmployees();
  }

  getAllEmployees() {

      this.employeeService.getAllEmployees().subscribe(

          emp => {
              this.employees = emp;
          }
      );
    }

  showEmployeeDetail(id) {

      this._router.navigate(["/employeeDetail", id]);
  }
  removeEmployee(id) {

      this.display = 'block'; //Set block css -- for Dialog
      this.employeeIdToDelete = id;

      //this.employeeService.DeleteEmployee(id).subscribe(

      //    resp => {

      //        this.IsEmployeeDeleted = resp;
      //        this.getAllEmployees();
      //    }

      //);

     
  }
  createNewEmployee() {

      this._router.navigate(["/AddEmployee"]);
  }

  updateEmployee(id) {

      this._router.navigate(["/UpdateEmployee", id]);
  }

  openModalDialog() {
      this.display = 'block'; //Set block css
  }

  closeModalDialog() {
      this.display = 'none'; //set none css after close dialog
  }

  DeleteRecord(response) {
      if (response == "Yes") {

          this.employeeService.DeleteEmployee(this.employeeIdToDelete).subscribe(

              resp => {

                  this.IsEmployeeDeleted = resp;
                  this.getAllEmployees();
                  this.closeModalDialog();
              }

          );
      }
      else
          this.closeModalDialog();
  }
}
