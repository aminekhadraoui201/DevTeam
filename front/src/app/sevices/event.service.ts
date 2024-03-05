import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Events } from "app/event/events";
import { environment } from "environments/environment";
import { catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Events[]>(environment.url + "/DevDream/events", {
      headers,
    });
  }

  getAllActiveEvents() {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Events[]>(environment.url + "/DevDream/Event/all", {
      headers,
    });
  }

  addEvent(event: {
    eventName: string;
    description: string;
    eventStart: Date;
    eventEnd: Date;
    budget: number;
    poster: string;
    // Add more properties as needed
  }) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Events>(
      environment.url + "/DevDream/Event/add",
      event,
      { headers }
    );
  }

  archiveEvent(id: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(
      environment.url + "/events/" + id + "/archive",
      {},
      { headers }
    );
  }

  updateEvent(id: number, event: Events) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const url = `${environment.url}/DevDream/Event/update/${id}`; // Use template literals for string interpolation
    return this.http.put<Events>(url, event, { headers });
  }

  deleteEvent(id: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.delete(environment.url + "/DevDream/Event/delete/" + id, {
      headers,
    });
  }

  showEvent(id: number) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const response = this.http.get<Events[]>(`${environment.url}/DevDream/Event/${id}`, {
     headers,
   }).pipe(
    catchError((error: any) => {
      return throwError(error);
    })
  );;
    return response;
  }
}
