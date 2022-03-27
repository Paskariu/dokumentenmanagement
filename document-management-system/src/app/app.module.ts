import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DragAndDropComponent } from './upload-page/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadPageComponent,
    HomePageComponent,
    SearchPageComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,  
    NgxDropzoneModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
