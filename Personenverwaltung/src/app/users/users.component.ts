import { Component, OnDestroy } from '@angular/core';
import { User, UserWithoutId } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
  users: User[] = [];

  constructor(
    private userService: UserService,
    ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }

  getFullName(user : User): String {
    return user.firstName + " " + user.lastName;
  }

  onSubmit(user: UserWithoutId) {
    this.addUser(user);
  }

  removeUser(user: User) {
    this.deleteUserByID(user);
  }

  deleteUserByID(user: User) {
    this.userService.deleteUserByID(user.id)
      .subscribe(() => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  addUser(user: UserWithoutId): void {
    this.userService.addUser(user).subscribe(user => this.users.push(user));
  }
}
