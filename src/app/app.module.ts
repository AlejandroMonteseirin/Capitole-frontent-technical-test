import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';





// Interceptors
import { fakeBackendProvider } from './interceptors/mock-backend.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule // http client
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
