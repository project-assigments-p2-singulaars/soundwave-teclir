import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-discover-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './discover-page.component.html',
  styleUrl: './discover-page.component.scss'
})
export class DiscoverPageComponent {

}
