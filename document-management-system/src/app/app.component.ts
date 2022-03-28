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
  foundFiles:Object = [];
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
      width: '250px',
      data: { "file": file}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
