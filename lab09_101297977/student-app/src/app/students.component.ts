import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `<h2>{{ getTitle() }} - {{ getCurrentDate() }}</h2>`
})
export class StudentsComponent {
  title = 'My List of Students';

  getTitle(): string {
    return this.title;
  }

  
  getCurrentDate(): string {
    const now = new Date();
    return now.toDateString() + ' ' + now.toLocaleTimeString();
  }
}
