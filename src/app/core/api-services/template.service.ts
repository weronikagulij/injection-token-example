import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../api-interfaces/template.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Template[]> {
    return this.http.get<Template[]>(`${environment.templateApi}/json/prod/templates.json`);
  }
}
