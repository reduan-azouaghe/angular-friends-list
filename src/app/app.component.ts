import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];
  people: string[] = [];

  addAppFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addAppFavorite(name: string) {
    if (!name || this.favorite.find(f => f === name)) return;
    this.favorite.push(name);
  }

  removeAppFavorite(name: string) {
    if (!name) return;
    this.favorite = this.favorite.filter(f => f !== name)
  }

  formatArrayWithAnd(strings: string[]) {
    if (strings.length === 0) {
      return "";
    } else if (strings.length === 1) {
      return String(strings[0]);
    } else if (strings.length === 2) {
      return `${strings[0]} and ${strings[1]}`;
    } else {
      return `${strings.slice(0, strings.length - 1).join(", ")} and ${strings[strings.length - 1]}`;
    }
  }
}
