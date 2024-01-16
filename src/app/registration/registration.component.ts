import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/userData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { last } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  public postJsonValue: any;
  showErrorAlert: boolean = false;
  showSuccessAlert: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  public postMethod(firstname: string, lastname: string, email: string, address: string, password: string){
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      address: address,
      password: password
    }

    this.http.post('http://127.0.0.1:8000/api/accounts', body, {headers: header}).subscribe((data) => {
      this.postJsonValue = data;
    });

  }

  closeAlert(): void {
    this.showErrorAlert = false;
    this.showSuccessAlert = false;
  }
}
