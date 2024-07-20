import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // get imagePath() {
  //   // a getter function to dynamic path value
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // function for click event
  onSelectUser() {}
}
