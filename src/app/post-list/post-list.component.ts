import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  content: string = 'yippie'

  ngOnInit(): void {
    this.content = 'yippie initialization'
    console.log('Content is initialized')
    console.log(this.content)
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngDoCheck(): void {

  }


  ngAfterContentInit(): void {
    this.content = 'yippie after initialization'
    console.log('After Content is initialized')
    console.log(this.content)
  }

  ngAfterContentChecked(): void {
      console.log('aftercontentchecked triggered')
  }

  ngAfterViewInit(): void {
      console.log('After view is initialized')
  }

  ngAfterViewChecked(): void {
      console.log('after view is checked')
  }

  ngOnDestroy(): void {
      console.log('byebye')
  }

}
