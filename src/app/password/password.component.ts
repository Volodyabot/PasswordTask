import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  password: string = '';

  firstSectionClass = "gray";
  secondSectionClass = "gray";
  thirdSectionClass = "gray";

  onChange() {
    this.setSectionClass();
  }

  checkPasswordStrength(password: string) {
    const hasLetters = password.match(/[a-zA-Z]/);
    const hasDigits = password.match(/\d/);
    const hasSymbols = password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/);

    if (password.length === 0) {
      return 'empty';
    } else if (password.length > 0 && password.length < 8) {
      return 'invalid';
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
      return 'medium';
    } else {
      return 'weak';
    }
  }

  setSectionClass() {
    const passwrdStatus = this.checkPasswordStrength(this.password);

    switch (passwrdStatus) {
      case 'empty': {
        this.firstSectionClass = "gray";
        this.secondSectionClass = "gray";
        this.thirdSectionClass = "gray";
        break;
      }
      case 'invalid': {
        this.firstSectionClass = "red";
        this.secondSectionClass = "red";
        this.thirdSectionClass = "red";
        break;
      }
      case 'weak': {
        this.firstSectionClass = "red";
        this.secondSectionClass = "gray";
        this.thirdSectionClass = "gray";
        break;
      }
      case 'medium': {
        this.firstSectionClass = "yellow";
        this.secondSectionClass = "yellow";
        this.thirdSectionClass = "gray";
        break;
      }
      case 'strong': {
        this.firstSectionClass = "green";
        this.secondSectionClass = "green";
        this.thirdSectionClass = "green";
        break;
      }
    }
  }
}
