import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-change-detection-child',
  templateUrl: './change-detection-child.component.html',
  styleUrls: ['./change-detection-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent implements OnInit, OnChanges {
 
  
  @Input() fruitData: BehaviorSubject<String[]>;
  //@Input() fruitData: String[];
  @Input() foodData : [];
  fruits : String[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.fruitData);
    this.cd.markForCheck();
    this.fruitData.subscribe((fruit:String[]) => {
        console.log(fruit);
        console.log(this.fruits === fruit);
        this.fruits = fruit;
        //this.fruits = [...fruit];
        //this.cd.markForCheck();
     });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside ngOnChanges for change detection");

  }

  refresh() {
    this.cd.detectChanges();
  }

}
