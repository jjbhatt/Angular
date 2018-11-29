import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'
import {Employee} from './employee'
import {Router, ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

    employee: any;
    IsemployeeUpdated: any;
    public gender: any;
    fname: string;
    lname: string;
    salary: number;
    radGender: any;

    constructor(private employeeService: EmployeeService, private activeRoute: ActivatedRoute, private _router: Router) { }

    ngOnInit() {
        const id = this.activeRoute.snapshot.params["id"];
        this.RetrieveAndPopulateEmployeeById(id);
  }

    RetrieveAndPopulateEmployeeById(id) {

        this.employeeService.getEmployeeByID(id).subscribe(
            emp => {
                console.log(emp);
                this.employee = emp;
                this.fname = this.employee.FirstName;
                this.lname = this.employee.LastName;
                this.radGender = this.employee.Gender;
                this.salary = this.employee.Salary;
            }
        );      
    }

    UpdateEmployee(formCollection) {

        console.log(formCollection);

        this.employee.ID = this.activeRoute.snapshot.params["id"];
        this.employee.FirstName = formCollection.fname;
        this.employee.LastName = formCollection.lname;
        this.employee.Gender = formCollection.radGender;
        this.employee.Salary = formCollection.salary;

        console.log(this.employee);

        this.employeeService.UpdateEmployee(this.employee.ID,this.employee).subscribe(

            data => {

                this.IsemployeeUpdated = data;
                this._router.navigate(["/employeeList"]);
            }
        );

       
    }
}
