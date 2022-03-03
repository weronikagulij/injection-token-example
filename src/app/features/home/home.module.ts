import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { INJECTION_TEMPLATE_SERVICE, TemplateService } from 'src/app/core/api-services/template.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
  ]
})
export class HomeModule { }
