import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import {Character} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 10000
  }];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  onDelete(uuid: string): void {
    // console.log(this.characters.find(character => character.id === uuid));
    this.characters = this.characters.filter( character => character.id !== uuid);
  }

}
