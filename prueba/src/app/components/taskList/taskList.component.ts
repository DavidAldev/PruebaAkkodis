import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskList',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css'],
  providers: [MessageService],
})
export class TaskListComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private router: Router, public taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  public redirectToNewTask(): void {
    this.router.navigate(['/add-task']);
  }

  private getTasks(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }
}
