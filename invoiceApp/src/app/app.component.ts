import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InvoiceModule } from './invoice/invoice.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
