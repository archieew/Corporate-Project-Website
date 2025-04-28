import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  title = 'Below are our corporate partners';

  showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}
staff = [ 
  { firstName: 'Archie', lastName: 'Custodio', email: 'adcustodio1@student.hau.edu.ph', role: 'Partner' },   
  { firstName: 'Aris', lastName: 'Custodio', email: 'Aris.Custodio@test.com', role: 'Partner' }, 
  { firstName: 'Arthur', lastName: 'Custodio', email: '.Custodio@test.com', role: 'Partner' }, 
  { firstName: 'Arnel', lastName: 'Custodio', email: 'Arnel.Custodio@test.com', role: 'Partner' }, 
  { firstName: 'Nora', lastName: 'Custodio', email: 'Nora.Custodio@test.com', role: 'Partner' } 
  ];

}
