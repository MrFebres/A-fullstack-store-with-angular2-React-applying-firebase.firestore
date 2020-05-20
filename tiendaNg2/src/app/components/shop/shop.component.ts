import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router } from '@angular/router';
import { product } from '../../models/product.interface';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public cart: any = [];
  public subscription: Subscription;
  public total: number;

  constructor(private shopSvc: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.shopSvc.getCart().subscribe(data => { //console.log(data);
    this.cart = data;
    this.total = this.shopSvc.getTotal(this.cart);
    },
    error => alert(error));
  }

  cancelPch() {
    this.shopSvc.clearCart();
    this.router.navigate(['product-list'])
  }

  buyConfirm(item) {
    // console.log(item);
    this.shopSvc.updateBD(item);
    this.shopSvc.clearCart();
    this.router.navigate(['product-list']);
  }

}
