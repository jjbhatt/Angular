import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {Employee} from './employee'

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    employees: Employee[];

    constructor(private httpService: HttpClient) {

        /*this.employees = [

            {
                "ID": "a46087ab-0939-40b7-b6a7-0f38a281b3e9",
                "FirstName": "John",
                "LastName": "Stanmore",
                "Gender": "Male",
                "Salary": "80000"
            },
            {
                "ID": "3b3c6788-956d-4aba-b336-23e17ac3d9b0",
                "FirstName": "Mark",
                "LastName": "Hastings",
                "Gender": "Male",
                "Salary": "60000"
            },
            {
                "ID": "9c394b8d-4b80-42db-bea9-4d6b2327f9a4",
                "FirstName": "Steve",
                "LastName": "Pound",
                "Gender": "Male",
                "Salary": "45000"
            },
            {
                "ID": "bd222e74-d6ee-4182-9fa5-586982f454a5",
                "FirstName": "Umang",
                "LastName": "Bhatt",
                "Gender": "Male",
                "Salary": "120000"
            },
            {
                "ID": "accbf972-199d-401d-abc1-8bb1d350256e",
                "FirstName": "Mary",
                "LastName": "Lambeth",
                "Gender": "Female",
                "Salary": "30000"
            },
            {
                "ID": "0a4cbd0f-f755-4c31-a45b-9fe7531d5c37",
                "FirstName": "Jay",
                "LastName": "Bhatt",
                "Gender": "Male",
                "Salary": "65000"
            },
            {
                "ID": "6e27e635-194d-4f44-b2d7-aa50909a0a7d",
                "FirstName": "John",
                "LastName": "Stanmore",
                "Gender": "Male",
                "Salary": "80000"
            },
            {
                "ID": "c0ea8713-28b7-4d8e-aa66-b1464a7fb816",
                "FirstName": "Ben",
                "LastName": "Hoskins",
                "Gender": "Male",
                "Salary": "70000"
            },
            {
                "ID": "8283a856-0b96-43ff-abeb-c571ba4bd4dd",
                "FirstName": "Valarie",
                "LastName": "Vikings",
                "Gender": "Female",
                "Salary": "35000"
            },
            {
                "ID": "056b4345-0e0e-43f2-8ce1-d4b3c966f51c",
                "FirstName": "Philip",
                "LastName": "Hastings",
                "Gender": "Male",
                "Salary": "45000"
            }
        ];*/
    }

    getAllEmployees() {

        return this.httpService.get<Employee[]>("http://localhost/EmployeeAPI/api/GetAllEmployees");
    }

    getEmployeeByID(id) {

        return this.httpService.get<Employee>("http://localhost/EmployeeAPI/api/GetEmployeeById/" + id);
    }

    DeleteEmployee(id) {

        return this.httpService.delete("http://localhost/EmployeeAPI/api/DeleteEmployee/" + id);
    }
    CreateEmployee(employee) {
        return this.httpService.post("http://localhost/EmployeeAPI/api/CreateEmployee", employee);
    }
    UpdateEmployee(id, employee) {

        return this.httpService.put("http://localhost/EmployeeAPI/api/UpdateEmployee/" + id, employee);

    }

}
