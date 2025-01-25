import { Component } from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';

@Component({
  selector: 'app-home-page',
  imports: [AvatarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
