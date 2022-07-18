import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from 'src/app/Task';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': "application/json",
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://clint-task-app.herokuapp.com/tasks/'

  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl}delete/${task.id}`
    return this.http.delete<Task>(url)
  }

  toggleTask(task:Task) {
    const url = `${this.apiUrl}task/update/${task.id}/`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task) {
    const url = `${this.apiUrl}create/`
    return this.http.post<Task>(url, task, httpOptions)
  }
}
