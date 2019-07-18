import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseURL: string = environment.baseUrl;
  constructor() { }

  upload(file: File) {
    let formData = new FormData();
    formData.append('file', file);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', this.baseURL);
    xhr.send(formData);
    return xhr;
  }

}
