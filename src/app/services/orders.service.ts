import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class OrdersService {
  ordersList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.ordersList = this.firebase.list('pedidos');
    return this.ordersList;
  }

  insertOrder(order) {
    this.ordersList.push({
      adress: order.direccion,
      date: order.fecha_pedido,
      hour: order.hora_pedido,
      payer: order.ordenante,
      productsString: order.productosString,
      town: order.pueblo
    });
  }

  updateOrder(order) {
    this.ordersList.update(order.$key, {
      adress: order.direccion,
      date: order.fecha_pedido,
      hour: order.hora_pedido,
      payer: order.ordenante,
      productsString: order.productosString,
      town: order.pueblo
    });
  }

  deleteOrder($key: string) {
    this.ordersList.remove($key);
  }

}
