import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  //create one single object instead of 3 values
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // @Output() select = new EventEmitter();
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // // same as before but rewrite properties with signal
  // //rememeber u shoud use call function syntax with () at user.component.html
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // a getter function to dynamic path value
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // function for click event
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
