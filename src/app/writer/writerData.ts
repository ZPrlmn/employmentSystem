import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee: {
    id: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: string;
    birthDate: string;
    email: string;
    address: string;
  }[] = [];

  employeeInput = [
    {
      id: '1',
      lastName: 'Embusacado',
      firstName: 'Carlo',
      gender: 'Male',
      age: '22',
      birthDate: '2001-04-25',
      email: 'carlo@gmail.com',
      address: 'San Leonardo, Nueva Ecija',
    },
    {
      id: '2',
      lastName: 'Doe',
      firstName: 'John',
      gender: 'Male',
      age: '30',
      birthDate: '1992-08-15',
      email: 'john.doe@example.com',
      address: 'New York, USA',
    },
    {
      id: '3',
      lastName: 'Smith',
      firstName: 'Jane',
      gender: 'Female',
      age: '28',
      birthDate: '1994-05-10',
      email: 'jane.smith@example.com',
      address: 'London, UK',
    },
    {
      id: '4',
      lastName: 'Garcia',
      firstName: 'Maria',
      gender: 'Female',
      age: '25',
      birthDate: '1997-11-20',
      email: 'maria.garcia@example.com',
      address: 'Madrid, Spain',
    },
    {
      id: '5',
      lastName: 'Kim',
      firstName: 'Sung',
      gender: 'Male',
      age: '27',
      birthDate: '1996-02-12',
      email: 'sung.kim@example.com',
      address: 'Seoul, South Korea',
    },
    {
      id: '6',
      lastName: 'Chen',
      firstName: 'Wei',
      gender: 'Female',
      age: '29',
      birthDate: '1993-07-08',
      email: 'wei.chen@example.com',
      address: 'Shanghai, China',
    },
    {
      id: '7',
      lastName: 'Johnson',
      firstName: 'Robert',
      gender: 'Male',
      age: '35',
      birthDate: '1987-12-05',
      email: 'robert.johnson@example.com',
      address: 'Los Angeles, USA',
    },
    {
      id: '8',
      lastName: 'Martinez',
      firstName: 'Ana',
      gender: 'Female',
      age: '31',
      birthDate: '1991-09-18',
      email: 'ana.martinez@example.com',
      address: 'Barcelona, Spain',
    },
    {
      id: '9',
      lastName: 'Wang',
      firstName: 'Li',
      gender: 'Male',
      age: '26',
      birthDate: '1995-03-22',
      email: 'li.wang@example.com',
      address: 'Beijing, China',
    },
    {
      id: '10',
      lastName: 'Lee',
      firstName: 'Ji Eun',
      gender: 'Female',
      age: '24',
      birthDate: '1998-06-30',
      email: 'ji.eun.lee@example.com',
      address: 'Seoul, South Korea',
    },
  ];
  

  constructor() {
    this.employee = this.employee.concat(this.employeeInput);
  }

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
    const newData = {
      id: idValue,
      lastName: lastNameValue,
      firstName: firstNameValue,
      gender: genderValue,
      age: ageValue,
      birthDate: birthDateValue,
      email: emailValue,
      address: addressValue,
    };
    this.employee.push(newData);
    console.log(this.employee);
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
    return this.employee;
  }

  deleteEmployee(index: number): void {
    if (index >= 0 && index < this.employee.length) {
      this.employee.splice(index, 1);
    }
  }

  searchEmployee(searchTerm: string): {
    id: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: string;
    birthDate: string;
    email: string;
    address: string;
  }[] {
    return this.employee.filter(employee =>
      Object.values(employee)
        .map(value => value.toLowerCase())
        .some(value => value.includes(searchTerm.toLowerCase()))
    );
  }

  editEmployee(index: number, newData: {
    id: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: string;
    birthDate: string;
    email: string;
    address: string;
  }): void {
    if (index >= 0 && index < this.employee.length) {
      this.employee[index] = newData;
    }
  }

}

