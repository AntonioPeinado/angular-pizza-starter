import { Component, Input, Inject } from '@angular/core';
import { PizzaImgService } from '../../services/pizza-img.service';
import { ENVIRONMENT, environment } from 'src/app/core/env/env.provider';

@Component({
  selector: 'ps-pizza-info',
  templateUrl: './pizza-info.component.html',
  styleUrls: ['./pizza-info.component.css'],
})
export class PizzaInfoComponent {
  @Input() pizza;
  constructor(
    private pizzaImgService: PizzaImgService,
    @Inject(ENVIRONMENT) private env: environment
  ) {}
  getImg() {
    return  this.env.serverURL + this.pizza.img;
    //return this.pizzaImgService.calculate(this.pizza.img);
  }
  shouldPrintDivider(i: number) {
    return i < this.pizza.ingredients.length - 1;
  }
  getPrice() {
    return this.pizza.ingredients.reduce((total, ing) => total + ing.prize, 0);
  }
}
