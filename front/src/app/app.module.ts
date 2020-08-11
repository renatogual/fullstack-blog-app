import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogModule } from './blog/BlogModule';
import { CommonMaterialModules } from 'src/app/common/material/CommonMaterialModules';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginModule } from './login/LoginModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule,
    CommonMaterialModules,
    MatToolbarModule,
    LoginModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
