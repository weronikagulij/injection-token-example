import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Template } from 'src/app/core/api-interfaces/template.model';
import { TemplateService } from 'src/app/core/api-services/template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  templates$ = this.templateService.getAll();

  trackByIdFn = (_: number, item: Template) => (item.id);
  constructor(private templateService: TemplateService) { }

}
