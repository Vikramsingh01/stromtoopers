import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  file: File;
  constructor(private readonly fileService: FileService) {

  }

  onFileSelect(event) {
    this.file = event.target.files[0]; 
  }
  upload() {
    let xhr = this.fileService.upload(this.file);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              console.log("Uploaded")
          } else {
              alert('Error in uploading document. Please try after sometime.');
          }
      }
    };


  }

}


