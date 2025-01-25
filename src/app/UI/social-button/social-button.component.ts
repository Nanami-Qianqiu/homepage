import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-button',
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css'
})
export class SocialButtonComponent {
    @Input() platform: string = '';
    @Input() iconClass: string = '';
    @Input() url: string = '';
    @Input() iconColor: string = '';
}
