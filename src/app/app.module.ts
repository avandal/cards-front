import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LoveLetterComponent } from './loveletter/loveletter.component';
import { MarkdownPipe } from './markdown.pipe';
import { DashboardComponent } from './loveletter/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoveLetterComponent,
    MarkdownPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
