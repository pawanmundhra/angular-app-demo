import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  templateUrl: './change-detection-child.component.html',
  styleUrls: ['./change-detection-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent implements OnInit {

  @Input() foodData: string[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  refresh() {
    this.cd.detectChanges();
    console.log(this.foodData);
  }

}
