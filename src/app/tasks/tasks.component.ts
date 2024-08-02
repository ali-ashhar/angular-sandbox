import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = dummyTasks;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddTask = false;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onComplite(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)!;
  }
  onStartAddTask() {
    this.isAddTask = true;
  }
  onCancelAddTask() {
    this.isAddTask = false;
  }
}
