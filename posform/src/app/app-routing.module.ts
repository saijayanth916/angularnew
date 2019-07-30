import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FirstmodalComponent } from './firstmodal/firstmodal.component';

const routes: Routes = [
    {
        path: 'button',
        component: ButtonComponent
    },
    {
        path: 'first',
        component: FirstmodalComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  