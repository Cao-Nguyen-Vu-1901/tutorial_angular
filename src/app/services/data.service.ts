// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.example.com/data';

  // Phương thức GET
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Phương thức GET với tham số
  getDataById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Phương thức POST
  createData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Phương thức PUT
  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // Phương thức DELETE
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}