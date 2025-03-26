import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<app-students></app-students>`
})
export class AppComponent {
  title = 'student-app';
}
