import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-prod-det',
  templateUrl: './prod-det.component.html',
  styleUrls: ['./prod-det.component.css']
})
export class ProdDetComponent implements OnInit {

  public prod: any;

  constructor(private prodSvc: ProductsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const idProd = this.router.snapshot.params['id']
    this.getDetails(idProd);
  }

  getDetails(id: string) {
    // console.log(id);
    return this.prodSvc.getProduct(id).subscribe(res => {
      this.prod = res;
      console.log(this.prod);
    })
  }

}
