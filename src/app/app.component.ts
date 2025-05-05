// // src/app/app.component.ts
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './shared/header/header.component';
// import { FooterComponent } from './shared/footer/footer.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, FooterComponent] // Đảm bảo import các component
// })
// export class AppComponent {
//   title = 'my-angular-app';
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { UserListComponent } from './pages/user-list/user-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'my-angular-app';
}