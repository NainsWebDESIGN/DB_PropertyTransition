import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppService } from '@service/app.service';
import { AppPipe } from '@pipe/app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
