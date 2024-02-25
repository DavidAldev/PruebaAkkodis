import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-addTask',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css'],
  providers: [MessageService],
})
export class AddTaskComponent implements OnInit {
  public taskForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public redirectToTaskList(): void {
    this.router.navigate(['']);
  }

  public submitForm(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: this.taskService.getNextId(),
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: false,
      };

      var success = this.taskService.addTask(newTask);
      this.showToast(success);
      this.taskForm.reset();
    }
  }

  private showToast(success: boolean) {
    if (success) {
      this.messageService.add({
        severity: 'success',
        summary: 'Added task successfully',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error, something went wrong, try again later',
      });
    }
  }
}
