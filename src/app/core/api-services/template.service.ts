import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../api-interfaces/template.model';
import { environment } from 'src/environments/environment';

export interface GetsAll {
  getAll(): Observable<Template[]>;
}

export const INJECTION_TEMPLATE_SERVICE = new InjectionToken<GetsAll>('INJECTION_TEMPLATE_SERVICE');

@Injectable()
export class TemplateService implements GetsAll {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Template[]> {
    return this.http.get<Template[]>(`${environment.templateApi}/json/prod/templates.json`);
  }
}
