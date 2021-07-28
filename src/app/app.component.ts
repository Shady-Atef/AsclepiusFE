import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Imhotep';
  isArabic: boolean = false;
  isLoading = false;
  showMenu: boolean = false;
  logged: boolean = false;
  imageShow: boolean = false;
  imageList: string[] = [];
  NotificationSubscription = new Subscription();
}
