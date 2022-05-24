import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { ResultsComponent } from './components/results/results.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ColorsService } from './services/colors.service';

@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
    ColorsService
  ]
})
export class HomeModule { }
