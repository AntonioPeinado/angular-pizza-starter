import { Component, Input } from '@angular/core';
import { PizzaImgService } from '../../services/pizza-img.service';

@Component({
  selector: 'ps-pizza-info',
  templateUrl: './pizza-info.component.html',
  styleUrls: ['./pizza-info.component.css'],
})
export class PizzaInfoComponent {
  @Input() pizza;
  constructor(private pizzaImgService: PizzaImgService) {}
  getImg() {
    return this.pizzaImgService.calculate(this.pizza.img);
  }
  shouldPrintDivider(i: number) {
    return i < this.pizza.ingredients.length - 1;
  }
  getPrice() {
    return this.pizza.ingredients.reduce((total, ing) => total + ing.prize, 0);
  }
}
