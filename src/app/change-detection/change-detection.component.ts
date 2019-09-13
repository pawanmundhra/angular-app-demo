import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  foodsObj = ['Bacon', 'Lettuce', 'Tomatoes'];
  fruitData = ['Apple', 'Banana', 'Grapes'];
  fruitsObj = new BehaviorSubject(this.fruitData);
  fruitDataDummy : any;

  constructor() { }

  ngOnInit() {
    this.fruitDataDummy = this.fruitData;
  }

  addFood(food) {
    this.foodsObj.push(food);
    //this.foodsObj = [...this.foodsObj, food];
  }

  addFruit(fruit) {
    this.fruitData.push(fruit);
    this.fruitsObj = new BehaviorSubject(this.fruitData);
    //this.fruitDataDummy = [...this.fruitData];
    this.fruitsObj.next([...this.fruitData]);
    //this.fruitsObj.next(this.fruitData);
    //this.fruitsObj = [...this.fruitsObj, fruit];
  }

}
