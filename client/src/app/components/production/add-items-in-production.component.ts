import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../models/production.model';
import { ProductItemService } from '../../services/product-item.service';

@Component({
  selector: 'app-add-items-in-production',
  templateUrl: './add-items-in-production.component.html',
  styleUrls: ['./add-items-in-production.component.css'],
})
export class AddItemInProductionComponent implements OnInit {
  productItem: ProductItem = {
    code: undefined,
    itemName: '',
    quantity: undefined,
    cost: undefined,
    saleRate: undefined,
    description: '',
    remarks: ''
  };
  currentProductItem: ProductItem = {};
  submitted = false;

  constructor(private productItemService: ProductItemService) {}

  ngOnInit() {
    this.updateProductWithCurrentItem();
  }

  items = [{
    code: 1200,
    itemName: 'BRINDA TEA GOLD 200g',
    description: ''
  },{
    code: 1250,
    itemName: 'BRINDA TEA GOLD 250g',
    description: 'Gold quality 250gram packet'
  },{
    code: 1500,
    itemName: 'BRINDA TEA GOLD 500g',
    description: ''
  },{
    code: 1000,
    itemName: 'BRINDA TEA GOLD 1Kg',
    description: ''
  },{
    code: 210,
    itemName: 'BRINDA TEA 10/-',
    description: ''
  },{
    code: 220,
    itemName: 'BRINDA TEA  20/-'
  },{
    code: 2200,
    itemName: 'BRINDA TEA 200g'
  },{
    code: 2250,
    itemName: 'BRINDA TEA 250g'
  },{
    code: 2500,
    itemName: 'BRINDA TEA 500g'
  },{
    code: 2000,
    itemName: 'BRINDA TEA 1Kg'
  },{
    code: 5000,
    itemName: 'BRINDA TEA 5Kg'
  }];
  
  currentItem = this.items[0];

  saveProductItem(): void {
    const data = {
      code: this.productItem.code,
      itemName: this.productItem.itemName,
      quantity: this.productItem.quantity,
      cost: this.productItem.cost,
      saleRate: this.productItem.saleRate,
      description: this.productItem.description,
      remarks: this.productItem.remarks
    };

    this.productItemService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentProductItem = res;
        this.submitted = true;
        this.productItem = {
          code: this.currentItem.code,
          itemName: this.currentItem.itemName,
          quantity: undefined,
          cost: undefined,
          saleRate: undefined,
          description: this.currentItem.description,
          remarks: ''
        };
      },
      error: (e) => console.error(e)
    });
  }

  newProductItem(): void {
    //this.submitted = false;
    this.productItem = {
      code: this.currentItem.code,
      itemName: this.currentItem.itemName,
      quantity: undefined,
      cost: undefined,
      saleRate: undefined,
      description: this.currentItem.description,
      remarks: ''
    };
  }

  updateProductWithCurrentItem() {
    this.productItem.code = this.currentItem.code;
    this.productItem.itemName = this.currentItem.itemName;
    this.productItem.description =  this.currentItem.description;
  }
}
