import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  @Output() cancel = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }
}
