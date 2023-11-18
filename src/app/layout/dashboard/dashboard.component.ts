import { Component } from '@angular/core';
import { cardDataInput } from 'src/app/components/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cardData = cardDataInput
}
