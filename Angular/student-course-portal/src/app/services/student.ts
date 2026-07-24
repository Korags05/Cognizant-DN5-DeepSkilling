import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private http = inject(HttpClient);

  getStudents() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
