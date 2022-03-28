import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { DragDropComponent } from './upload-page/drag-drop/drag-drop.component';
import { MatFormFieldModule } from "@angular/material/form-field"
import { FormsModule } from '@angular/forms';
import { DisplayFileComponent } from './search-page/display-file/display-file.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadPageComponent,
    HomePageComponent,
    SearchPageComponent,
    DragDropComponent,
    DisplayFileComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,  
    NgxDropzoneModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DisplayFileComponent]
})
export class AppModule { }
