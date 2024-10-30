import {Component} from '@angular/core';
import {DbzService} from "../services/dbz.service";
import {Character} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPage {

  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(uuid: string): void {
    this.dbzService.onDelete(uuid);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
