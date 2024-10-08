import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {
  @Input() pUserName: string = '';
  count: number = 0;

  constructor() {
    console.log('Inside Constructor')
    console.log(this.pUserName)
  }

  ngOnInit() {
    console.log('Inside ngOnItit')
    console.log(this.pUserName)
  }

  ngOnChanges() {
      console.log('OnChanges Triggerd')
      console.log(this.pUserName)
  }

  ngDoCheck() {
    console.log('DoCheck')
  }

  addToCount(){
    this.count += 1;
  }
}
