import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../models/production.model';
import { ProductItemService } from '../../services/product-item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.css'],
})
export class ProductItemListComponent implements OnInit {
  productItems: ProductItem[] = [];
  currPageItems: ProductItem[] = [];
  pageStart = 0;
  pageRow = 10;
  currentProductItem: ProductItem = {};
  currentIndex = -1;
  itemName:any = '';
  viewMode = true;
  showProducedItem = true;
  subscription$: Subscription;

  constructor(private productItemService: ProductItemService) {
    this.itemName = '';
    this.subscription$ = new Subscription;
  }

  ngOnInit(): void {
    this.retrieveProductItems();
    this.subscription$.add(this.productItemService.getProductionObservable().subscribe(data => {
      if (data.case === 'DELETE_PRODUCTION') {
        this.refreshList();
      }
    }));
  }

  onPageChange(event: any) {
    this.pageStart = event.first;
    this.pageRow = event.rows;
    const endIndex = this.productItems.length < event.first + event.rows ? this.productItems.length : event.first + event.rows;
    this.currPageItems = this.productItems?.slice(event.first, event.first + event.rows);
  }

  retrieveProductItems(): void {
    this.productItemService.getAll().subscribe({
      next: (data) => {
        this.productItems = data;
        this.currPageItems =  this.productItems?.slice(this.pageStart, this.pageStart + this.pageRow)
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  refreshList(): void {
    this.retrieveProductItems();
    this.currentProductItem = {};
    this.currentIndex = -1;
  }

  setActiveProductItem(productItem: ProductItem, index: number): void {
    this.showProducedItem = false;
    this.currentProductItem = productItem;
    this.currentIndex = index;
    this.viewMode = true;
    setTimeout(() => {
      this.showProducedItem = true;
    });
  }

  removeAllTutorials(): void {
    this.productItemService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentProductItem = {};
    this.currentIndex = -1;

    this.productItemService.findByTitle(this.itemName).subscribe({
      next: (data) => {
        this.productItems = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
