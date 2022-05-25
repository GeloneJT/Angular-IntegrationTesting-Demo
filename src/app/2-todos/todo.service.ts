import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: { title: string; }) {
    return this.http.post('...', todo).pipe(map(r => r))
    ;
  }

  getTodos() { 
    return this.http.get<any>('...').pipe(map(r => r))
    ;
  }

  getTodosPromise() {
    return lastValueFrom(this.http.get('...').pipe(map(r => r))) ;
  }

  delete(id: any) {
    return this.http.delete('...').pipe(map(r => r))
    ;
  }
}