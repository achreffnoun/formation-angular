import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list-utilisateurs',
  imports: [MatTableModule, RouterLink],
  templateUrl: './list-utilisateurs.html',
  styleUrl: './list-utilisateurs.scss'
})
export class ListUtilisateurs {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website','action'];
  dataSource: User[] = [];
  users : User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(users)
      this.dataSource = users;
    });
  }
}
