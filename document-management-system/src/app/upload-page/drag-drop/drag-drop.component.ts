import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent{
  title = 'dropzone';  
  fileLimit = 1;
  files: File[] = [];  
    
  constructor(private http: HttpClient) { }  
    
  onSelect(event:any) {  
    console.log(event);
    const available = Math.max(this.fileLimit - this.files.length, 0);
    this.files.push(...event.addedFiles.slice(0,available));  
  
    const formData = new FormData();  
      
    for (var i = 0; i < this.files.length; i++) {   
      formData.append("file[]", this.files[i]);  
    }  
     
    this.http.post('http://localhost:3000/upload', formData)  
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