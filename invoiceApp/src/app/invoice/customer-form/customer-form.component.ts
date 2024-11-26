import { Component } from '@angular/core';
import { Supplier } from '../models/supplier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  testVariable: Supplier = new Supplier("FOO");
}
