import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INJECTION_TEMPLATE_SERVICE, TemplateService } from './core/api-services/template.service';
import { HomeModule } from './features/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [
    {
      provide: INJECTION_TEMPLATE_SERVICE,
      useClass: TemplateService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
