import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddItemInProductionComponent } from './components/production/add-items-in-production.component';
import { ProductItemListComponent } from './components/production/product-item-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'productItems', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'addProductItem', component: AddItemInProductionComponent },
  { path: 'productItems', component: ProductItemListComponent },
  { path: 'productItems/:id', component: ProductItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
