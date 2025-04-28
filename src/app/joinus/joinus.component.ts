import { Component, } from '@angular/core';


@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrl: './joinus.component.css',
})

export class JoinusComponent {
  title = 'Fill the form below';
  user = { 
    name: '',
    email: '',
    institution: '',
  };

}
