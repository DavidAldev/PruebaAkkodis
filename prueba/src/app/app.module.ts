import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/addTask/addTask.component';
import { TaskListComponent } from './components/taskList/taskList.component';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng-lts/toast';

@NgModule({
  declarations: [AppComponent, AddTaskComponent, TaskListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
