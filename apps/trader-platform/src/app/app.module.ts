import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MegaMenuModule} from 'primeng/megamenu';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';



import { AppComponent } from './app.component';
import { SplitButtonModule } from 'primeng';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MegaMenuModule, ToolbarModule, SplitButtonModule,
    ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
