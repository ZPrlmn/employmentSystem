// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }[] = [];

  registerUser(user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): void {
    this.users.push(user);
    console.log('User registered:', user);
  }

  // user.service.ts

userInput = [
  {
    firstName: 'Carlo',
    lastName: 'Embuscado',
    email: 'carlo@gmail.com',
    password: 'carlo'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'johndoe123'
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    password: 'alice123'
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    password: 'bob123'
  },
  {
    firstName: 'Emily',
    lastName: 'Jones',
    email: 'emily.jones@example.com',
    password: 'emily123'
  },
  {
    firstName: 'Daniel',
    lastName: 'Williams',
    email: 'daniel.williams@example.com',
    password: 'daniel123'
  }
];

constructor() {
  this.userInput = this.userInput.concat(this.userInput);
}


getUserByEmail(email: string): any {
  const lowerCaseEmail = email.toLowerCase();
  return this.userInput.find(user => user.email.toLowerCase() === lowerCaseEmail);
}

  // Other methods as needed
}