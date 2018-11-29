import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'
import {Employee} from './employee'
import {Router} from '@angular/router'


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

    employee: any;
    IsemployeeCreated: any;
    public radGender: any;
    fname: any;
    lname: any;
    salary: any;

    constructor(private employeeService: EmployeeService, private _router: Router) { }

    ngOnInit() {
        this.employee = {};
        this.radGender = "Male";
  }

  createNewEmployee(formCollection) {

      console.log(formCollection);

      this.employee.FirstName = formCollection.fname;
      this.employee.LastName = formCollection.lname;
      this.employee.Gender = formCollection.radGender;
      this.employee.Salary = formCollection.salary;

      console.log(this.employee);

      this.employeeService.CreateEmployee(this.employee).subscribe(

          data => {

              this.IsemployeeCreated = data;
              this._router.navigate(["/employeeList"]);
          }
      );
  }
}
