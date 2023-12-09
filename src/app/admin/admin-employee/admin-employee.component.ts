import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/components/adminData';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.scss'],
})
export class AdminEmployeeComponent {
  selectedEmployee: any;
  constructor(private employeeService: EmployeeService) {}

  getData(
    idValue: string,
    lastNameValue: string,
    firstNameValue: string,
    genderValue: string,
    ageValue: string,
    birthDateValue: string,
    emailValue: string,
    addressValue: string
  ) {
    this.employeeService.getData(
      idValue,
      lastNameValue,
      firstNameValue,
      genderValue,
      ageValue,
      birthDateValue,
      emailValue,
      addressValue
    );
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

  viewDetails(index: number): void {
    this.selectedEmployee = this.employeeService.displayData()[index];
  }

  deleteEmployee(index: number): void {
    this.employeeService.deleteEmployee(index);
  }
}
