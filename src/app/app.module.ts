import { BrowserModule } from '@angular/platform-browser';

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimsComponent } from './UI/claims/claims.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { MatButtonModule,MatDatepickerModule,MatNativeDateModule , MatFormFieldModule,MatInputModule, MatCheckboxModule, MatRippleModule,MatSelectModule,MatStepperModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ClaimsComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatFormFieldModule,MatInputModule, MatCheckboxModule, MatRippleModule
,MatDatepickerModule,MatNativeDateModule ,MatSelectModule ,MatStepperModule ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {


 }
