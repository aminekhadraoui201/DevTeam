import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-all-event',
  templateUrl: './show-all-event.component.html',
  styleUrls: ['./show-all-event.component.css']
})
export class ShowAllEventComponent implements OnInit {

  data: any; // Declare a variable to store the fetched data

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:9000/DevDream/Event/all')
    .subscribe(response => {
      this.data = response;
    }, error => {
      console.error(error);
    });
    console.log(this.data);
  }

}
