import { Component } from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {SocialButtonComponent} from '../../UI/social-button/social-button.component';

@Component({
  selector: 'app-home-page',
  imports: [AvatarComponent, SocialButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
