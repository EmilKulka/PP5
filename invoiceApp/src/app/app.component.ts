import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InvoiceModule } from './invoice/invoice.module';
import { ProductModuleModule } from './product-module/product-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceModule, ProductModuleModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
