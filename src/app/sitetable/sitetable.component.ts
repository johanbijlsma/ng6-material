import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SitetableDataSource } from './sitetable-datasource';

@Component({
  selector: 'app-site-table',
  templateUrl: './sitetable.component.html',
  styleUrls: ['./sitetable.component.css']
})
export class SitetableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SitetableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SitetableDataSource(this.paginator, this.sort);
  }
}
