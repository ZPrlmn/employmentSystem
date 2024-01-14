import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { last } from 'rxjs';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {
  public getEmployee: any;
  public postEmployee: any;
  public editEmployee: any;
  public deleteEmployee: any;
  constructor(private http: HttpClient) {}

  public  showId: any;
  public  showLastName: any;
  public  showFirstName: any;
  public  showGender: any;
  public  showAge: any;
  public  showBirthDate: any;
  public  showEmail: any;
  public  showAddress: any;

  public editId: any;
  public editLastName: any;
  public editFirstName: any;
  public editGender: any;
  public editAge: any;
  public editBirthDate: any;
  public editEmail: any;
  public editAddress: any;

  ngOnInit(): void {
      this.getMethod();
  }

  public getMethod(){
    this.http.get('http://127.0.0.1:8000/api/employee').subscribe((data) => {
      this.getEmployee = data;
    });
  }

  public deleteMethod(id: number) {
    this.http.delete(`http://127.0.0.1:8000/api/employee/${id}`).subscribe(() => {
      this.getMethod();  // Optional: Refresh the data or update the UI after deleting
    });
  }
  
  public postMethod(lastname: string, firstname: string, gender: string, age: string, birthdate: string, email: string, address: string){
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      lastname: lastname,
      firstname: firstname,
      gender: gender,
      age: age,
      birthdate: birthdate,
      email: email,
      address: address
    }

    this.http.post('http://127.0.0.1:8000/api/employee', body, {headers: header}).subscribe((data) => {
      this.postEmployee = data;
    });
    this.getEmployee()
  }

  public showMethod(id: number, lastname: string, firstname: string, gender: string, age: number, birthdate: Date, email: string, address:string){
    this.showId = id,
    this.showLastName = lastname,
    this.showFirstName = firstname,
    this.showGender = gender,
    this.showAge = age,
    this.showBirthDate = birthdate,
    this.showEmail = email,
    this.showAddress = address
  }

  public openEdit(id: number, lastname: string, firstname: string, gender: string, age: string, birthdate: string, email: string, address: string){
    this.editId = id;
    this.editLastName = lastname;
    this.editFirstName = firstname;
    this.editGender = gender;
    this.editAge = age;
    this.editBirthDate = birthdate;
    this.editEmail = email;
    this.editAddress = address;

    console.log(this.editFirstName)
    
  }
  
  public editMethod(id: number, lastname: string, firstname:string, gender:string, age: string, birthdate: string, email: string, address: string){

    
    const updateData = {
      lastname: lastname,
      firstname: firstname,
      gender: gender,
      age: age,
      birthdate: birthdate,
      email: email,
      address: address
    }

    this.http.put(`http://127.0.0.1:8000/api/employee/${id}`, updateData).subscribe((data) => {
        this.editEmployee = data;
      });
      console.log(id)
  }

}

