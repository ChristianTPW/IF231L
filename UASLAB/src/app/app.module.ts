import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DevelopersComponent } from './developers/developers.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ContentService } from './content-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BlogsComponent,
    DevelopersComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
