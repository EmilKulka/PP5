import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModuleModule { }
