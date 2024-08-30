import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItem } from '../../models/production.model';
import { ProductItemService } from '../../services/product-item.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentProductItem: ProductItem = {
    id: undefined,
    code: undefined,
    itemName: '',
    quantity: undefined,
    cost: undefined,
    saleRate: undefined,
    description: '',
    remarks: ''
  };

  message = '';

  constructor(
    private productItemService: ProductItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProductItem(this.route.snapshot.params['id']);
    }
  }

  getProductItem(id: string): void {
    this.productItemService.get(id).subscribe({
      next: (data) => {
        this.currentProductItem = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  /* updatePublished(status: boolean): void {
    const data = {
      title: this.currentProductItem.title,
      description: this.currentProductItem.description,
      published: status
    };

    this.message = '';

    this.productItemService.update(this.currentProductItem.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentProductItem.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  } */

  updateProductItem(): void {
    this.message = '';

    this.productItemService
      .update(this.currentProductItem.id, this.currentProductItem)
      .subscribe({
        next: (res) => {
          this.message = res.message
            ? res.message
            : 'This product was updated successfully!';
          this.viewMode = true;
        },
        error: (e) => console.error(e)
      });
  }

  deleteProductItem(): void {
    this.productItemService.delete(this.currentProductItem.id).subscribe({
      next: (res) => {
        console.log(res);
        this.viewMode = true;
        this.productItemService.dispatchProductionObservable({case: 'DELETE_PRODUCTION'});
      },
      error: (e) => console.error(e)
    });
  }
}
