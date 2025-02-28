import { AbstractControl, ValidationErrors } from "@angular/forms";

export function artisteValidator (control: AbstractControl): ValidationErrors | null {

    if (!control.value) return { name: 'Champ obligatoire' };
    if (control.value.length <= 2) return { name: 'Votre nom doit contenir au minumum 3 caractères' };
    if (control.value === 'test') return { name: 'Votre nom ne peut pas être "test".' };

    return null;
}