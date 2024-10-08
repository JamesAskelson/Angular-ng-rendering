import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from "./post-list/post-list.component";
import { NgComponentOutlet } from '@angular/common';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, NgComponentOutlet, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = 'John Doe';


  constructor (private viewContainer: ViewContainerRef) {}

  loadComponent(){
    this.viewContainer.createComponent(PostListComponent);
  }

  removeComponent(){
    this.viewContainer.remove()
  }

  changeUser(){
    this.userName = 'changed name'
  }


}
