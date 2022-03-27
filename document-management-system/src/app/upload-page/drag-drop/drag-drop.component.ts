import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragAndDropComponent{
  title = 'dropzone';  
    
  files: File[] = [];  
    
  constructor(private http: HttpClient) { }  
    
  onSelect(event:any) {  
    console.log(event);  
    this.files.push(...event.addedFiles);  
  
    const formData = new FormData();  
      
    for (var i = 0; i < this.files.length; i++) {   
      formData.append("file[]", this.files[i]);  
    }  
     
    this.http.post('http://localhost:3306/upload', formData)  
    .subscribe(res => {  
       console.log(res);  
       alert('Uploaded Successfully.');  
    })  
  }  
    
  onRemove(event:any) {  
    console.log(event);  
    this.files.splice(this.files.indexOf(event), 1);  
  }  
}  