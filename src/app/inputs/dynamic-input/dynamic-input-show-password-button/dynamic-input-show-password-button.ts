import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dynamic-input-show-password-button',
  imports: [],
  templateUrl: './dynamic-input-show-password-button.html',
  styleUrl: './dynamic-input-show-password-button.scss',
})

/**
 * Button-Komponente für die Sichtbarkeit von Passwortfeldern.
 */

export class DynamicInputShowPasswordButton {
  
  /** Gibt an, ob der Button angezeigt werden soll */
  @Input({required:true}) isVisible: boolean = false;

  /** Event, das ausgelöst wird, wenn der Button geklickt wird */
  @Output() toggle = new EventEmitter<void>();

  /**
   * Wird ausgeführt, wenn der Button geklickt wird.
   * Löst das `toggle` Event aus, um die Passwortanzeige umzuschalten.
   */
  onClick() {
    this.toggle.emit();
  }
}

