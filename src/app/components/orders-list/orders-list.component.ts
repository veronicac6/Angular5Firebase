import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  ordersList = [];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    var x = this.ordersService.getData();
    x.snapshotChanges().subscribe(item => {
      this.ordersList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.ordersList.push(y);
      });
    });
    // console.log(this.ordersList);
  }

}
