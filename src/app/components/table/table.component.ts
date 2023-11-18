import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit{
  
  session: any;

  addedData: { id: string, lastName: string, firstName: string, gender: string, age: string, birthDate: string, dateHired: string }[] = [];

  loadData(){
    let data:any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }

   saveData(idValue: string, lastNameValue: string, firstNameValue: string, genderValue: string, ageValue: string, birthDateValue: string, dateHiredValue: string ){

    let data = [
      this.addedData.push({ id: idValue, lastName: lastNameValue, firstName: firstNameValue, gender: genderValue, age: ageValue, birthDate: birthDateValue, dateHired: dateHiredValue })  
    ];
    localStorage.setItem('session', JSON.stringify(this.addedData));
    this.loadData()
  }

  removeData(id: string) {
    const index = this.addedData.findIndex(item => item.id === id);

    if (index !== -1) {
      this.addedData.splice(index, 1);
      localStorage.setItem('session', JSON.stringify(this.addedData));
    }

    this.loadData()
  }

  editData(idValue: string, lastNameValue: string, firstNameValue: string, genderValue: string, ageValue: string, birthDateValue: string, dateHiredValue: string) {
    const index = this.addedData.findIndex(item => item.id === idValue);

    if (index !== -1) {
      console.log(this.addedData[index])      
    }
  }
  

  constructo(){}
  ngOnInit(): void {
      
  }
}

