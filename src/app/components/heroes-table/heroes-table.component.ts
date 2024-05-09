import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface HeroeData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css'],

})
export class HeroesTableComponent implements AfterViewInit {
  filterValue: string = '';

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<HeroeData>;

  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 10 heroes
    const heroes: HeroeData[] = [];
    for (let i = 0; i <= 10; i++) { heroes.push(this.createNewHeroe(i)); }



    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(heroes);
  }
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    if (this.filterValue === "") {
      return;
    }
    const filterValue = this.filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }









  private createNewHeroe(id: number): HeroeData {
    const name = "Heroe-" + (1 + id);

    return {
      id: id.toString(),
      name: name
    };
  }




  public editHeroe(id: number): void {
    return;
  }

  public deleteHeroe(id: number): void {
    return;
  }




}
