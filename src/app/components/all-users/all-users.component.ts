import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];
  id: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.users = value.allUsers);
  }

  ngOnInit(): void {
  }

  getCurrentUser(): void {
    const currentUserId = this.id;
    this.router.navigate(['users', this.id], {state: {currentUserId}});
  }
}
