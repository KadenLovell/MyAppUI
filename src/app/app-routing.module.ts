import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'mycomponent', component: MyComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
