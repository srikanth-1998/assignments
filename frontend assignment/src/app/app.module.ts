import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceService } from './services/service.service';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, AccumulationChartModule
  ],
  providers: [ServiceService, PieSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
