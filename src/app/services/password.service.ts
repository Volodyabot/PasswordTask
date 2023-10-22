import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  passwordStrength = "empty";

  constructor() { }

  checkPasswordStrength(password: string) {
    const hasLetters = password.match(/[a-zA-Z]/);
    const hasDigits = password.match(/\d/);
    const hasSymbols = password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/);

    if (password.length === 0) {
      this.passwordStrength = "empty";
      return 'empty';
    } else if (password.length > 0 && password.length < 8) {
      this.passwordStrength = "invalid";
      return 'invalid';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.passwordStrength = "strong";
      return 'strong';
    } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
      this.passwordStrength = "medium";
      return 'medium';
    } else {
      this.passwordStrength = "weak";
      return 'weak';
    }
  }

}
