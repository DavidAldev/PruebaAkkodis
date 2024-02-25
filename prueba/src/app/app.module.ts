import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng-lts/dropdown';
import { AddTaskComponent } from './components/addTask/addTask.component';
import { TaskItemComponent } from './components/taskItem/taskItem.component';
import { TaskListComponent } from './components/taskList/taskList.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskItemComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
