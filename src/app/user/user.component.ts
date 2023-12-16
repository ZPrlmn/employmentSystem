import { Component } from '@angular/core';
import { EmployeeService } from '../writer/writerData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  searchTerm: string = '';
  searchResults: any[] = [];
  activeDetailsId: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  search(): void {
    this.searchResults = this.employeeService.searchEmployee(this.searchTerm);
  }

  toggleDetails(employeeId: string): void {
    this.activeDetailsId = this.activeDetailsId === employeeId ? null : employeeId;
  }
}