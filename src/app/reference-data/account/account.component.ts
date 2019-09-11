import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  @Input() accountPk: number;

  @Output()
  passToParent = new EventEmitter();

  ngOnInit() {
  }

  eventEmit() {
    this.passToParent.emit(['Pawan', 'Rahul', 'Harsh']);
  }

}
