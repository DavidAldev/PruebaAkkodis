import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private tasks: Task[] = [];
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Comprar alimentos',
      description:
        'Ir al supermercado y comprar los alimentos necesarios para la semana.',
      completed: false,
    },
    {
      id: 2,
      title: 'Hacer ejercicio',
      description:
        'Realizar una sesión de ejercicio cardiovascular durante 30 minutos.',
      completed: true,
    },
    {
      id: 3,
      title: 'Limpiar la casa',
      description: 'Limpiar todas las habitaciones y aspirar el suelo.',
      completed: false,
    },
    {
      id: 4,
      title: 'Estudiar para el examen',
      description:
        'Revisar los apuntes y hacer ejercicios de práctica para el examen de mañana.',
      completed: false,
    },
    {
      id: 5,
      title: 'Llamar al servicio técnico',
      description:
        'Llamar al servicio técnico para solucionar el problema con el internet.',
      completed: true,
    },
    {
      id: 6,
      title: 'Pasear al perro',
      description: 'Salir a pasear al perro al parque durante 20 minutos.',
      completed: false,
    },
    {
      id: 7,
      title: 'Hacer la cena',
      description: 'Preparar una cena saludable y equilibrada.',
      completed: false,
    },
    {
      id: 8,
      title: 'Leer un libro',
      description: 'Leer al menos un capítulo del libro que estoy leyendo.',
      completed: true,
    },
  ];

  constructor() {}

  public getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  public addTask(newTask: Task): boolean {
    const index = this.tasks.findIndex((task) => task.id === newTask.id);
    if (index === -1) {
      this.tasks.push(newTask);
      return true;
    }
    return false;
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

  public getNextId(): number {
    if (this.tasks.length === 0) {
      return 1;
    } else {
      const maxId = Math.max(...this.tasks.map((task) => task.id));
      return maxId + 1;
    }
  }
}
