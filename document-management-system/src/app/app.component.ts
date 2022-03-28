import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisplayFileComponent } from './search-page/display-file/display-file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'document-management-system';
  msg:String = "";
  foundFiles:any = [{
    "name": "word.docx",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];
  constructor(private http: HttpClient,public dialog: MatDialog) { }

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
