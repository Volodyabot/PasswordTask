import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  firstSectionColor = "gray";
  secondSectionColor = "gray";
  thirdSectionColor = "gray";

  public passwordForm!: FormGroup;

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.passwordForm = new FormGroup({
      'password': new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onChange() {
    this.firstSectionColor = this.setSectionColor(1);
    this.secondSectionColor = this.setSectionColor(2);
    this.thirdSectionColor = this.setSectionColor(3);
  }

  setSectionColor(sectionNumber: number) {
    const passwordStatus = this.passwordService.checkPasswordStrength(this.passwordForm.value.password);

    const colorScheme: { [key: string]: { [key: string]: string } } = {
      '1': {
        'empty': 'gray',
        'invalid': 'red',
        'weak': 'red',
        'medium': 'orange',
        'strong': 'green'
      },
      '2': {
        'empty': 'gray',
        'invalid': 'red',
        'weak': 'gray',
        'medium': 'orange',
        'strong': 'green'
      },
      '3': {
        'empty': 'gray',
        'invalid': 'red',
        'weak': 'gray',
        'medium': 'gray',
        'strong': 'green'
      },

    };

    return (colorScheme[sectionNumber][passwordStatus]);
  }
}
