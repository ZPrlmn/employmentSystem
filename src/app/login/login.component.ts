import { Component } from '@angular/core';
import { UserService } from '../components/accountData';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showErrorAlert: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    const user = this.userService.getUserByEmail(this.email);

    console.log('Entered Email:', this.email);
    console.log('Entered Password:', this.password);
    console.log('User:', user);

    if (user && user.password === this.password) {
      this.router.navigate(["user"]);
    } else {
      this.showErrorAlert = true
    }
  }

  closeAlert(): void {
    this.showErrorAlert = false;
  }

  admin(adminInput:string){
    if (adminInput === 'admin') {
      this.router.navigate([''])
    }
    else{
      this.showErrorAlert = true;
    }
  }
  

}