import { Component, forwardRef, Input,} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicInputShowPasswordButton } from './dynamic-input-show-password-button/dynamic-input-show-password-button';


/**
 * Konfiguration für einen bestimmten Input-Typ.
 */
export interface InputTypeConfig {
  label: string;                         // Label bzw. Placeholder des Feldes
  type: string;                          // HTML-Input-Typ
  validatePattern: RegExp;               // Regex zur Validierung
  name: string;                          // Name-Attribut
  repeatPasswordLabel?: string;          // Label für Confirm-Passwort-Feld
  autocomplete?: string;                 // HTML-Autocomplete
}

/**
 * Registry für mehrere Input-Konfigurationen.
 */
export interface TypeRegistry {
  [key: string]: InputTypeConfig;
}

@Component({
  selector: 'dynamic-input',
  imports: [CommonModule, DynamicInputShowPasswordButton],
  templateUrl: './dynamic-input.html',
  styleUrl: './dynamic-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicInput),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DynamicInput),
      multi: true
    }
  ]
})
export class DynamicInput implements ControlValueAccessor {


  // Hauptwerte
  value = '';             // Haupt-Eingabewert
  repeatValue = '';       // Wiederholter Passwortwert (für repeat Password check, falls nötig)
  isTouched:boolean = false;
  currentErrors: ValidationErrors | null = null;

  @Input({ required: true }) type!: string;   // Bestimmt, welcher Input-Typ geladen wird
  @Input() required: boolean = false;         // HTML required
  @Input() name!: string;                     // Name-Attribut
  @Input() confirmPassword: boolean = false;  // Aktiviert Confirm-Passwort
  @Input() autocomplete!: string;             // Autocomplete-Funktion
  @Input() placeholder!: string;              // Platzhaltertext

  currentPasswordType = 'password';           // Zustand des Passwortfeldes (sichtbar/versteckt)

  typeKey!: keyof InputTypeConfig;            // intern gespeicherter Typ

  /**
   * Registry mit Validierungsregeln und Standardkonfigurationen.
   * Setzt Label und Autocomplete dynamisch anhand von Inputs.
   * Hier erweitern für neue Inputfelder/Inputtypen
   */
  typeRegistry: TypeRegistry = {
    'username': {
      validatePattern: /^[a-zA-Z0-9_-]{4,16}$/,
      label: this.placeholder ?? 'Username',
      type: 'text',
      name: 'username',
      autocomplete: this.autocomplete ?? 'username'
    },

    'password': {
      validatePattern: /^.{8,}$/,
      label: this.placeholder ?? 'Password',
      repeatPasswordLabel: 'Confirm Password',
      type: 'password',
      name: 'password',
      autocomplete: this.autocomplete ?? (this.confirmPassword ? 'new-password' : 'current-password')
    },

    'email': {
      validatePattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      label: this.placeholder ?? 'E-Mail',
      type: 'email',
      name: 'email',
      autocomplete: this.autocomplete ?? 'email'
    },

    'text': {
      validatePattern: /^.{3,}$/,
      label: this.placeholder ?? '',
      type: 'text',
      name: this.name ?? '',
      autocomplete: ''
    }
  };

  /**
   * Initialisiert die Komponente und setzt typeKey.
   */
  ngOnInit() {
    this.typeKey = this.type as keyof InputTypeConfig;
  }

  private onChange = (value: any) => {}; // Callback für Wertänderung
  public onTouched = () => {};           // Callback für Touch-Event

  /**
   * Setzt Eingabewert beim Laden externer FormControl-Werte.
   */
  writeValue(value: any): void {
    this.value = value || '';
  }

  /**
   * Registriert Callback bei Wertänderung.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registriert Callback bei Touch-Event.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = () => {
      this.isTouched = true;
      fn();
    };
  }

  /**
   * Handler für das Confirm-Passwort-Feld.
   */
  onRepeatInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.repeatValue = val;
    this.onChange(this.value);
  }

  /**
   * Handler für das Hauptinput.
   */
  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }

  /**
   * Formularvalidierung basierend auf dem ausgewählten Typ.
   */
  validate(control: AbstractControl): ValidationErrors | null {
    const type = this.type as keyof TypeRegistry;
    const validationPattern = this.typeRegistry[type].validatePattern;
    const valid = validationPattern.test(this.value);

    // Regex-Validierung
    if (!valid) {
      this.currentErrors = { patternInvalid: true };
      return this.currentErrors
    }

    // Confirm-Passwort-Validierung
    if (this.confirmPassword) {
      if (!this.repeatValue || this.value !== this.repeatValue) {
        this.currentErrors = { passwordsNotMatching: true };
        return this.currentErrors
      }
    }

    this.currentErrors = null;
    return null;
  }

  get hasError(): boolean {
    return this.isTouched && this.currentErrors !== null;
  }

  /**
   * Wechselt Passwortfeld zwischen "password" und "text".
   */
  onTogglePasswordType() {
    if (this.currentPasswordType === 'password') {
      this.currentPasswordType = 'text';
      return;
    }

    if (this.currentPasswordType === 'text') {
      this.currentPasswordType = 'password';
      return;
    }

    this.currentPasswordType = 'password';
  }
}
