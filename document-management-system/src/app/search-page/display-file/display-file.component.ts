import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {
  fileName:String = "";
  file:any = "";
  
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DisplayFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.fileName=data.name
    }

  ngOnInit(): void {
    //this.fileName = this.data.file.name 
    this.fileName= "test"
  }

  onNoClick():void{
    this.dialogRef.close();
  }
  editMetadata(event:any){
    var request = '{"filename": '+ this.fileName +';}';
    this.http.post('http://localhost:3000/setmetadata', request)  
    .subscribe(res => {  
       console.log(res);  
       alert('Uploaded Successfully.');
    })  
  }

}
