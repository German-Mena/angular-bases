import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public realName: string = 'Tony';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescpition(): string {
    return `${this.name} - ${this.realName} - ${this.age}`;
  }

  changeHero(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  reset(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
