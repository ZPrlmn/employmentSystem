import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/userData';
import { EmployeeService } from 'src/app/writer/writerData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getUsers();
    this.displayData();
  }

  getUsers(): void {
    // Use the UserService to get the list of users
    this.users = this.userService.getUsers();
  }




  people: any[] = [];



  displayData(): void {
    // Use the WriterDataService to get the list of people
    this.people = this.employeeService.displayData();
  }
}
