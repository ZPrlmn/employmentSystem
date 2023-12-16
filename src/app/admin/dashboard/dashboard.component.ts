import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/writer/writerData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  btnEmployeeList: boolean = false;
  btnEmployeeEmail: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  showEmployeeList(): void {
    this.btnEmployeeList = true;
    this.btnEmployeeEmail = false;
  }
  showEmployeeEmail(): void {
    this.btnEmployeeEmail = true;
    this.btnEmployeeList = false;
  }

  displayData(): {
    id: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: string;
    birthDate: string;
    email: string;
    address: string;
  }[] {
    return this.employeeService.displayData();
  }
}