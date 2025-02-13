import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {  } from '@angular/forms';
import { EmpdataService } from '../service/empdata.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,HeaderComponent
  ],
  exports:[HeaderComponent],
  providers:[EmpdataService]
})
export class UserModule { }
