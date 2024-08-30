import { Component, OnInit } from '@angular/core';
import { ProductItemService } from '../../services/product-item.service';

@Component({
  selector: 'app-stock-db',
  templateUrl: './stock-db.component.html',
  styleUrls: ['./stock-db.component.css'],
})
export class StockDBComponent implements OnInit {

  productItems:any[] = [];
  currPageItems:any[] = [];
  pageStart = 0;
  pageRow = 10;
  currentProductItem:any = {};
  currentIndex = -1;
  itemName:any = '';
  viewMode = true;
  showProducedItem = true;

  constructor(private productItemService: ProductItemService) {
    this.itemName = '';
  }

  ngOnInit(): void {
    this.retrieveProductItems();
  }

  onPageChange(event: any) {
    this.pageStart = event.first;
    this.pageRow = event.rows;
    const endIndex = this.productItems.length < event.first + event.rows ? this.productItems.length : event.first + event.rows;
    this.currPageItems = this.productItems?.slice(event.first, event.first + event.rows);
  }

  retrieveProductItems(): void {
    this.productItemService.getTotalProductions().subscribe({
      next: (data) => {
        this.productItems = data;
        this.currPageItems =  this.productItems?.slice(this.pageStart, this.pageStart + this.pageRow);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveProductItems();
    this.currentProductItem = {};
    this.currentIndex = -1;
  }

  setActiveProductItem(productItem: any, index: number): void {
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
        this.currPageItems =  this.productItems?.slice(this.pageStart, this.pageStart + this.pageRow)
      },
      error: (e) => console.error(e)
    });
  }
}
