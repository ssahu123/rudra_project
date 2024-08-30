import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddItemInProductionComponent } from './components/production/add-items-in-production.component';
import { ProductItemListComponent } from './components/production/product-item-list.component';
import { ProductItemDetailsComponent } from './components/production/product-item-details.component';
import { StockDBComponent } from './components/stock-dashboard/stock-db.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemInProductionComponent,
    ProductItemListComponent,
    ProductItemDetailsComponent,
    StockDBComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    PaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
