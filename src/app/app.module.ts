import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostResolveService} from './services/post/post-resolve.service';
import {FormsModule} from '@angular/forms';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { UserComponent } from './components/user/user.component';
import {UserResolveService} from './services/user/user-resolve.service';

const userPath = {
  path: 'users',
  component: AllUsersComponent,
  resolve: {allUsers: UserResolveService},
  children: [
    {path: ':id', component: UserComponent}
  ]
};

const postsPath = {
  path: 'posts',
  component: AllPostsComponent,
  resolve: {allPosts: PostResolveService},
  children: [
    {path: ':id', component: SinglePostComponent}
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    SinglePostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      userPath,
      postsPath
      ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
