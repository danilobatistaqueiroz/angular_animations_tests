import { Component } from '@angular/core';
import { openCloseAnimation } from './open-close.animation';

@Component({
  standalone: true,
  selector: 'app-open-close',
  animations: [openCloseAnimation],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.scss']
})
export class OpenCloseComponent {
  isOpen = true;

  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

}