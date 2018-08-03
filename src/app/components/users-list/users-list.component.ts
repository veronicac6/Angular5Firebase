import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // console.log(this.usersList);
    var x = this.usersService.getData();
    x.snapshotChanges().subscribe(item => {
      this.usersList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.usersList.push(y as User);
        // console.log(this.usersList);
      });
    });
  }

}
