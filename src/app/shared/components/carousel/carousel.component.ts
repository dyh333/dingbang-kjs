import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  array = [ 1 ];
  constructor() { }

  ngOnInit() {
    setTimeout(_ => {
      this.array = [ 1, 2, 3 ];
    }, 500);
  }

}
