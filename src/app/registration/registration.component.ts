import { Component } from '@angular/core';
import { UserService } from '../components/accountData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
  showErrorAlert: boolean = false;
  showSuccessAlert: boolean = false;
  
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  } = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    if (!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password) {
      this.showErrorAlert = true;
      return;
    }
    
    this.userService.registerUser(this.user);
    this.showSuccessAlert = true;
    this.router.navigate(["user"])
  }

  closeAlert(): void {
    this.showErrorAlert = false;
    this.showSuccessAlert = false
  }

}
