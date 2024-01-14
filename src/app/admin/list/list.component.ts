import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/userData';
import { EmployeeService } from 'src/app/writer/writerData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public getUser: any;
  public getEmployee: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
      this.getUserMethod();
      this.getEmployeesMethod();
  }

  public getUserMethod(){
    this.http.get('http://127.0.0.1:8000/api/accounts').subscribe((data) => {
      console.log(data)
      this.getUser = data;
    });
  }

  public getEmployeesMethod(){
    this.http.get('http://127.0.0.1:8000/api/employee').subscribe((data) => {
      this.getEmployee = data;
    });
  }
}
