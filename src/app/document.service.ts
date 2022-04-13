import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './document';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private apiServerUrl = environment.apiBaseUrl;
  private url = '/document/';

  constructor(private http: HttpClient) {}

  public getItems(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiServerUrl}${this.url}all`);
  }

  public addItem(item: Document): Observable<Document> {
    return this.http.post<Document>(`${this.apiServerUrl}${this.url}add`, item);
  }

  public updateItem(item: Document): Observable<Document> {
    return this.http.put<Document>(
      `${this.apiServerUrl}${this.url}update`,
      item
    );
  }

  public deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}${this.url}delete/${id}`
    );
  }
}
