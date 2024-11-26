import { Component } from '@angular/core';
import { Supplier } from '../models/supplier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  standalone: false
})

export class CustomerFormComponent {
  testVariable: Supplier = new Supplier("FOO");
}
