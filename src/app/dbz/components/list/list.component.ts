import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 500
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(uuid?: string): void {
    //this.characterList.splice(id, 1);
    if(!uuid) {
      console.log('No se encontro el UUID asociado');
      return;
    }

    this.onDelete.emit(uuid);
  }

}
