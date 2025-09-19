import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})

export class PersonComponent {
  @Input() person: string = "Anon";
  @Output() addFavoritePersonEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFavoritePersonEmitter: EventEmitter<string> = new EventEmitter<string>();

  isPersonFavorite: boolean = false

  addPersonFavorite(name: string) {
    this.isPersonFavorite = true;
    this.addFavoritePersonEmitter.emit(name)
  }
  removePersonFavorite(name: string) {
    this.isPersonFavorite = false;
    this.removeFavoritePersonEmitter.emit(name)
  }
}
