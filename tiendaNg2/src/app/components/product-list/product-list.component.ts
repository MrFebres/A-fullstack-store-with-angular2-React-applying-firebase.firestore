import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
// import { FilterPipe } from '../../filter.pipe';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public filterProd = '';
  public products = [];

  constructor(private prodSvc: ProductsService, private shopSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.prodSvc.getAllProducts().subscribe(prodSnapshot => {
      this.products = [];
      prodSnapshot.forEach((prodData: any) => {
        this.products.push({
          id: prodData.payload.doc.id,
          data: prodData.payload.doc.data()
        })
        // console.log('PRODUCTOS', this.products)
      })
      return this.products;
    })
  }

  addProduct(idProd: string, prodImg: string, prodN: string, prodPrc: number, stck: number, value: number) {
    let idPr: string = idProd,
        img: string = prodImg,
        name: string = prodN,
        price: number = prodPrc,
        stock: number = stck,
        qty: number = value,
        subtotal: number = qty * price,

        data: any;

        data = {idProd, img, name, price, stock, qty, subtotal};
        

    this.shopSvc.AddCart(data);
    console.log(data);
  }

}
