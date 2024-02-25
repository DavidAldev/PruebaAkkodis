import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private tasks: Task[] = [];
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Tarea 1',
      description: 'Descripción de la tarea 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Tarea 2',
      description: 'Descripción de la tarea 2',
      completed: true,
    },
    {
      id: 3,
      title: 'Tarea 3',
      description: 'Descripción de la tarea 3',
      completed: false,
    },
    {
      id: 4,
      title: 'Tarea 4',
      description: 'Descripción de la tarea 4',
      completed: false,
    },
    {
      id: 5,
      title: 'Tarea 5',
      description: 'Descripción de la tarea 5',
      completed: false,
    },
  ];

  constructor() {}

  public getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
  }

  public deleteTask(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  public modifyTaskStatus(id: number, status: boolean): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index].completed = status;
    }
  }
}
