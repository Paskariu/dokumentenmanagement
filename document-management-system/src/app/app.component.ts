import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { DisplayFileComponent } from './display-file/display-file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'document-management-system';
  msg:String = "";
  dummyFile:any = {"name": "word.docx",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };
  foundFiles:any = [this.dummyFile,this.dummyFile];
  currentUrl:any = "";
  constructor(private http: HttpClient,public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.currentUrl = event.url;
      };
 });
  }

  onClick(event:any){
    this.http.get('http://localhost:3000/search/' + '?searchField='+ encodeURIComponent( JSON.stringify(this.msg)))
    .subscribe(res => {  
       console.log(res);
       this.foundFiles=res;
       alert('Uploaded Successfully.');
    })
  }

  openDialog(file:any): void {
    const dialogRef = this.dialog.open(DisplayFileComponent, {
      width: '500px',
      data: { "file": file}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
