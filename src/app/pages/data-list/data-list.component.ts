import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (dataList$ | async; as dataList) {
      <ul>
        @for (item of dataList; track $index) {
          <li>{{ item.name }}</li>
        }
      </ul>
    } @else {
      <div>Loading...</div>
    }
  `
})
export class DataListComponent {
  private dataService = inject(DataService);
  dataList$: Observable<any[]> = this.dataService.getData();
}