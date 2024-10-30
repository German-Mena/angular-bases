import {Component, EventEmitter,  Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: null
  };

  emitCharacter() {

    console.log(this.character);
    if (this.character.name.length === 0) return;

    // importante pasar por valor y no por referencia
    // de esta forma al modificar propiedades de ese obj no sufre cambios
    this.onNewCharacter.emit({...this.character});

    /*this.character.name = '';
    this.character.power = null;*/

    this.character = {name: '', power: null};
  }

}
