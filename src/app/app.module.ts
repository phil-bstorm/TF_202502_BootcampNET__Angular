import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { tokenInterceptor } from './demo/interceptors/token.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    SharedModule
  ],
  providers: [provideHttpClient(
    withInterceptors([tokenInterceptor])
  )], // Important pour utiliser HttpClient
  bootstrap: [AppComponent]
})
export class AppModule { }
