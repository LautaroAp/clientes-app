import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: string = 'Curso Spring 5 + Angular'; // curso = 'Curso Spring 5 + Angular';
  profesor: string = 'Andres Guzman';
}
