import { ValidationErrors, AbstractControl } from '@angular/forms';


export class UserIdValidator {
    static spaceCheck(control: AbstractControl): ValidationErrors | null {
        if ((control.value as String).indexOf(' ') >= 0) {
            return {
                spaceCheck : true
            };
        }

        return {};
    }
}
