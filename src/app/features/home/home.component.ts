import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/core/api-services/template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  templates$ = this.templateService.getAll();

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
  }

}
