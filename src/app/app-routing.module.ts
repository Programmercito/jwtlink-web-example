import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './shared/example/example.component';
import { InitComponent } from './shared/init/init.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'example/:data', component: ExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })], exports: [RouterModule]
})
export class AppRoutingModule { }
