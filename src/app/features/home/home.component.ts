import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Template } from 'src/app/core/api-interfaces/template.model';
import { GetsAll, INJECTION_TEMPLATE_SERVICE, TemplateService } from 'src/app/core/api-services/template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  templates$ = this.getsAllTemplates.getAll();

  trackByIdFn = (_: number, item: Template) => (item.id);
  constructor(@Inject(INJECTION_TEMPLATE_SERVICE) private getsAllTemplates: GetsAll) { }

}
