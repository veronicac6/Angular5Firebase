import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
// import { User } from '../../services/user.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList=[];
  constructor( private productsService:ProductsService) { }

  ngOnInit() {
    var x = this.productsService.getData();
    x.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productsList.push(y);
      });
    });
  }

}
