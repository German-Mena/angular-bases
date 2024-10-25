import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['spiderman', 'ironman', 'hulk', 'Superman'];
  public removedHero: string = '';

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  removeLastHero(): void {
    this.removedHero = this.heroesNames.pop() ?? '';
  }

  reset(): void {
    this.heroesNames = ['spiderman', 'ironman', 'hulk', 'thor'];
    this.removedHero = '';
  }

}
