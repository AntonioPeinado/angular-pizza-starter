import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private.routing';
import { PrivateComponent } from './private.component';
import { HttpClientModule } from '@angular/common/http';
import { APIInterceptorProvider } from '../core/http/api.interceptor';
import { AuthInterceptorProvider } from './services/http/auth.interceptor';
import { HeaderModule } from './header/header.module';
import { PizzaListModule } from './pizza/pages/list/pizza-list.module';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    PrivateRoutingModule,
    HttpClientModule,
    HeaderModule, PizzaListModule
  ],
  providers: [
    APIInterceptorProvider,
    AuthInterceptorProvider
  ],
})
export class PrivateModule { }
