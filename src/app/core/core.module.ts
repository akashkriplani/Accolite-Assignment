import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [AppComponent]
})
export class CoreModule { }
