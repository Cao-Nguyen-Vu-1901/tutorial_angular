import { Component, OnInit } from '@angular/core';
import { InforService } from './infor.service';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {
  data: any;

  constructor(private inforService: InforService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.inforService.getData().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

