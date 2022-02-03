import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { ShowAfterDirective } from './directives/show-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    ShowAfterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
