import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input  () title: String ='';
  @Input  () content: String ='';
  @Input  () classColor: String ='';
  @Input  () btnCollapse: String ='';
}
