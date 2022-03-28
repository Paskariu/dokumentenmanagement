import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {
  tag:String = "";
  file:any = "";
  
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DisplayFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    }

  ngOnInit(): void {
  }

  onNoClick():void{
    this.dialogRef.close();
  }
  editMetadata(event:any){
    var request = '{"filename":'+this.data.name+'"data": ['+ this.tag +'];}';
    this.http.post('http://localhost:3000/setmetadata', request)  
    .subscribe(res => {  
       console.log(res);  
       alert('Uploaded Successfully.');
    })  
  }

}
