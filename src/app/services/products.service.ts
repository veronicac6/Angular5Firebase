import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { User } from './user.model';

@Injectable()
export class ProductsService {
  productsList: AngularFireList<any>;
  // selectedUser: User = new User();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.productsList = this.firebase.list('products');
    return this.productsList;
  }

  insertProduct(product) {
    this.productsList.push({
      name: product.name,
      price: product.price
    });
  }

  updateProduct(product) {
    this.productsList.update(product.$key, {
      name: product.name,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    this.productsList.remove($key);
  }
}
