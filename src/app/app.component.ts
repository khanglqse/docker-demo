import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  data: any
  constructor(private http: HttpClient) {

  }
  title = 'frontend';
  ngOnInit() {
    this.http.get('http://localhost:3000')
    .subscribe(data => this.data = data) 
  }
  
}
