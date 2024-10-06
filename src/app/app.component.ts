import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from "./post-list/post-list.component";
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private viewContainer: ViewContainerRef) {}

  loadComponent(){
    this.viewContainer.createComponent(PostListComponent)
  }

  removeComponent(){
    this.viewContainer.remove()
  }
}
