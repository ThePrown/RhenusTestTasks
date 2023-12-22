import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { User, UserWithoutId } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  providers: [Location]
})
export class UserDetailComponent{
  @Input() user!: User;
  showEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserByID();
  }
  getUserByID(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserByID(id).subscribe(user => this.user = user);
  }

  getFullName(user : User): String {
    return user.firstName + " " + user.lastName;
  }

  goBack(): void {
    this.location.back();
  }

  removeUser(user: User) {
    this.deleteUserByID(user);
  }

  deleteUserByID(user: User) {
    this.userService.deleteUserByID(user.id).subscribe(() => {
      this.router.navigate(["/users"]);
    });
  }

  enableEdit() {
    this.showEdit = true;
  }

  onSubmit(user: UserWithoutId) {
    this.showEdit = false;
    const editedUser: User = {
      "id": this.user.id,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email
    };
    this.editUser(editedUser);
  }

  editUser(user: User) {
    this.userService.editUser(user).subscribe((user) => {
      this.user = user;
    });
  }
}
