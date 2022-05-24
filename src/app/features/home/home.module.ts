import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FiltersComponent } from './components/filters/filters.component';
import { InputComponent } from './components/input/input.component';
import { ResultsComponent } from './components/results/results.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ColorsService } from './services/colors.service';
import { DataSharingService } from './services/data-sharing.service';

@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent,
    ResultsComponent,
    DropdownComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,

    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    ColorsService,
    DataSharingService
  ]
})
export class HomeModule { }
