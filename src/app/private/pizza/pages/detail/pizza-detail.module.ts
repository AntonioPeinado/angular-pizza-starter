import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { PizzaDetailRoutingModule } from './pizza-detail.routing';
import { CommonModule } from '@angular/common';
import { PizzaDetailComponent } from './pizza-detail.component';
import { CommentListModule } from 'src/app/private/comment/components/list/comment-list.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PizzaInfoComponent } from './pizza-info.component';

@NgModule({
  declarations: [PizzaDetailComponent, PizzaInfoComponent],
  imports: [
    CommonModule,
    CommentListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    PizzaDetailRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class PizzaDetailModule {}
