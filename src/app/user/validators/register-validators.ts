import { ValidationErrors, AbstractControl } from "@angular/forms";

export class RegisterValidators {
    static match(controlName :string, matchingControlName: string){
        return (group: AbstractControl): ValidationErrors | null  => {
            const control = group.get(controlName)
            const matchingControl = group.get(matchingControlName)

            if (!control || !matchingControl) {
                console.log('form controls can not be found in the form group')
                return { controlNotFound: false }
            }
            const error = control.value === matchingControl.value ?
                null :
                { noMatch: true }

                matchingControl.setErrors(error)
            return error
        }
    }
}
//new Registervalidators.natch( <~ withot static) 