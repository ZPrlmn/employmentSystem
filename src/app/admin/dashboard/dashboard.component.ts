import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/writer/writerData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  btnEmployeeList: boolean = false;
  btnEmployeeEmail: boolean = false;

  public getEmployee: any;

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.displayData()    
  }

  showEmployeeList(): void {
    this.btnEmployeeList = true;
    this.btnEmployeeEmail = false;
  }
  showEmployeeEmail(): void {
    this.btnEmployeeEmail = true;
    this.btnEmployeeList = false;
  }

  public displayData() {
    this.http.get('http://127.0.0.1:8000/api/employee').subscribe((data) => {
      this.getEmployee = data;
    });
  }

}