import { Component, Input } from '@angular/core';

@Component({
  selector: 'da-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  @Input()
  title: string = '';
}
