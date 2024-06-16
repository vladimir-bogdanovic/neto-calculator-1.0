import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NetoComponent } from './components/neto/neto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'calculate-mass';
}
