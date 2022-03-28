import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayFileComponent } from './display-file/display-file.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  msg:String = "";
  foundFiles:File[] = [new File(["a"],"test.pdf")];
  fileID = 0;
  constructor(private http: HttpClient,public dialog: MatDialog) { }

  onClick(event:any){
    this.http.get('http://localhost:3000/search/' + '?searchField='+ encodeURIComponent( JSON.stringify(this.msg)))
    .subscribe(res => {  
       console.log(res);
       alert('Uploaded Successfully.');
    })  
  }

  openDialog(file:File): void {
    const dialogRef = this.dialog.open(DisplayFileComponent, {
      width: '250px',
      data: { file: file}
    });
    dialogRef.afterClosed().subscribe();
  }
}
