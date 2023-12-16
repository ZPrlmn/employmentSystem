import { Component } from '@angular/core';
import { EmployeeService } from './writerData';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent {
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


  editMode = false;
  editedEmployee: any; // Holds edited data temporarily
  selectedEmployeeIndex: number = 0; // Holds the index of the selected employee
  

  enterEditMode(): void {
    this.editedEmployee = { ...this.selectedEmployee }; // Create a copy of the selected employee for editing
    this.editMode = true;
  }
  
  editEmployee(index: number, newData: any): void {
    this.employeeService.editEmployee(index, newData);
    this.editMode = false; // Exit edit mode after editing
  }
  
  cancelEdit(): void {
    this.editMode = false; // Cancel editing
  }
  

  deleteEmployee(index: number): void {
    this.employeeService.deleteEmployee(index);
  }
}
