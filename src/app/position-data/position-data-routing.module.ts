import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionDataComponent } from './position-data.component';


const routes: Routes = [{
  path: '',
  component: PositionDataComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionDataRoutingModule { }
