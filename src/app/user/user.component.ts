import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  // // same as before but rewrite properties with signal
  // //rememeber u shoud use call function syntax with () at user.component.html
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // a getter function to dynamic path value
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // function for click event
  onSelectUser() {
    this.select.emit(this.id);
  }
}
