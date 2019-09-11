import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  foodsObj = ['Bacon', 'Lettuce', 'Tomatoes'];

  constructor() { }

  ngOnInit() {
  }

  addFood(food) {
    // this.foodsObj.push(food);
    this.foodsObj = [...this.foodsObj, food];
  }

}
