import { FormGroup, ValidationErrors } from "@angular/forms";

export function ConfirmPasswordValidator (formGroup: FormGroup): ValidationErrors | null {
    
    if (formGroup.controls['password'].value !== formGroup.controls['confirmPassword'].value) return { name: 'Mots de passe différents.' }
    return null;
}