import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "upload-page", component: UploadPageComponent},
  {path: "search-page", component: SearchPageComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
