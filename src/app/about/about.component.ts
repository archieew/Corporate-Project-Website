import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'What to expect?';
  clickCount = 0;
  itemCounts: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  clickMe(itemIndex: number): void {
    this.itemCounts[itemIndex]++;
    this.showPopup(`You claimed a FREE gift!`);
  }

  private showPopup(message: string): void {
    alert(message);
  }
  
}
