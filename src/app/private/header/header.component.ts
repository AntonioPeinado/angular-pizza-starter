import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output()
  propagar = new EventEmitter<string>();
  onPropagar() {
    this.propagar.emit();
  }
}