import { Component, Input } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-help-text',
  templateUrl: './help-text.component.html',
  styleUrls: ['./help-text.component.scss']
})
export class HelpTextComponent {
  @Input() firstSectionColor = "gray";
  @Input() secondSectionColor = "gray";
  @Input() thirdSectionColor = "gray";
}
