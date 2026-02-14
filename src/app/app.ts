import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly originalTitle = 'Angular Hello World from Don';
  protected readonly title = signal(this.originalTitle);
  protected inputValue = signal('');

  onButtonClick() {
    const inputText = this.inputValue().trim();
    
    if (inputText === '') {
      alert('Please enter a text in the input field');
      this.title.set(this.originalTitle);
      return;
    }
    
    this.title.set(inputText);
  }
}


