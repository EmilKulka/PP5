import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-module/product-form/product-form.component';

export const routes: Routes = [
    { path: 'product-form', component: ProductFormComponent },
    { path: 'invoice', 
        loadChildren: () => import("./invoice/invoice.module").then(m => m.InvoiceModule)
    }
];
