import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionDataRoutingModule } from './position-data-routing.module';
import { PositionDataComponent } from './position-data.component';


@NgModule({
  declarations: [PositionDataComponent],
  imports: [
    CommonModule,
    PositionDataRoutingModule
  ]
})
export class PositionDataModule { }
