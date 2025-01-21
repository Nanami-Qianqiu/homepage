import { Component } from '@angular/core';
import {BackgroundComponent} from '../background/background.component';
import {AvatarComponent} from '../avatar/avatar.component';

@Component({
  selector: 'app-home-page',
  imports: [BackgroundComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
