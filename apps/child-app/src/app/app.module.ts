import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MicroApp1Component } from './micro-app1/micro-app1.component';
import { MicroApp2Component } from './micro-app2/micro-app2.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'app1',
    component: MicroApp1Component
  },
  {
    path:'app2',
    component: MicroApp2Component
  }

]

@NgModule({
  declarations: [AppComponent, MicroApp1Component, MicroApp2Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
