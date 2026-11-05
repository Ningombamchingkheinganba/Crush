import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  accepted = false;
  noCount = 0;

  hearts = Array.from({ length: 20 }, (_, i) => i);

  get noText(): string {
    const messages = [
      'No 🙈',
      'Are you sure? 🥺',
      'Think again! 💗',
      'Please? 🥹',
      'Give me a chance! ❤️'
    ];

    return messages[Math.min(this.noCount, messages.length - 1)];
  }

  sayYes() {
    this.accepted = true;
  }

  sayNo() {
    this.noCount++;
  }

  noX = 0;
  noY = 0;
  noMoves = 0;

  moveNoButton() {
    this.noMoves++;

    // Move button to a random position
    this.noX = Math.floor(Math.random() * 240) - 120;
    this.noY = Math.floor(Math.random() * 160) - 80;
  }
}
