import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'
import {Employee} from './employee'
import {Router, ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

    employee: Employee;

    constructor(private employeeService: EmployeeService, private activeRoute: ActivatedRoute) { }

    ngOnInit() {

        const id = this.activeRoute.snapshot.params["id"];
        this.showEmployeeDetail(id);

    }
    showEmployeeDetail(id) {

        this.employeeService.getEmployeeByID(id).subscribe(
            emp => {
                console.log(emp);
                this.employee = emp;
            }
        );
    }

}
