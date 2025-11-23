export const inputHTML=`<div class="input-field" [class.error]="hasError">
    <input 
    [name]="name" 
    [type]="typeRegistry[typeKey].type == 'password' ? this.currentPasswordType : typeRegistry[typeKey].type " 
    [placeholder]="typeRegistry[typeKey].label"  
    [attr.required]="required ? '' : null" 
    [value]="value" 
    (input)="onInput($event)" 
    (blur)="onTouched()" 
    required
    [autocomplete]="typeRegistry[typeKey].autocomplete"
    >
    @if(typeRegistry[typeKey].type == 'password'){
        <dynamic-input-show-password-button [isVisible]="this.currentPasswordType == 'password'" (toggle)="onTogglePasswordType()"></dynamic-input-show-password-button>
    }
</div>


 @if(confirmPassword){
    <div class="input-field" [class.error]="hasError">
        <input
            name="repeatPassword" 
            [type]="!confirmPassword ? typeRegistry[typeKey].type : this.currentPasswordType"
            [placeholder]="typeRegistry[typeKey].repeatPasswordLabel"
            [value]="repeatValue"
            (input)="onRepeatInput($event)"
            (blur)="onTouched()" 
            autocomplete="new-password"
            required
        >
        <dynamic-input-show-password-button [isVisible]="this.currentPasswordType == 'password'" (toggle)="onTogglePasswordType()"></dynamic-input-show-password-button>
    </div>
 }

`