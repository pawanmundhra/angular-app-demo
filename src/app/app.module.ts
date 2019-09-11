import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDemoComponent } from './demo/app-demo.component';
import { AutoComponent } from './auto/auto.component';
import { NavComponent } from './nav/nav.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { ReferenceDataFilter } from './reference-data/ReferenceDataFilter';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PositionDataComponent } from './position-data/position-data.component';
import { AccountComponent } from './reference-data/account/account.component';
import { CustomerComponent } from './reference-data/customer/customer.component';
import { CustomerService } from './reference-data/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { InputFormatDirective } from './input-format.directive';
import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeDetectionChildComponent } from './change-detection/change-detection-child/change-detection-child.component';
import { CustomReferenceDataPipe } from './reference-data/custom-reference-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppDemoComponent,
    AutoComponent,
    NavComponent,
    ReferenceDataComponent,
    ReferenceDataFilter,
    AccountComponent,
    CustomerComponent,
    InputFormatDirective,
    LoginComponent,
    LoginReactiveComponent,
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
    CustomReferenceDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
