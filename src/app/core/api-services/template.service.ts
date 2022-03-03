import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../api-interfaces/template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Template[]> {
    return this.http.get<Template[]>('https://cobiro.s3-eu-west-1.amazonaws.com/json/prod/templates.json');
  }
}
