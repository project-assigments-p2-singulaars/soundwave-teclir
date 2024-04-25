import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-join-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './join-page.component.html',
  styleUrl: './join-page.component.scss'
})
export class JoinPageComponent {

}
