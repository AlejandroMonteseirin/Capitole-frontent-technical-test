import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeroeModel } from 'src/app/models/heroeModel';
import { MockApiService } from 'src/app/services/mock-api.service';


@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css'],

})
export class HeroesTableComponent implements AfterViewInit {
  filterValue: string = '';

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<HeroeModel>;

  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private mockApiService: MockApiService, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();

  }
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getHeroes();

  }

  applyFilter() {
    const filterValue = this.filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  insertHeroes(): void {
    this.loading = true;
    const heroes: HeroeModel[] = [
      { id: 1, name: 'Spiderman' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Batman' },
      { id: 4, name: 'Wonder Woman' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Captain America' },
      { id: 7, name: 'Hulk' },
      { id: 8, name: 'Thor' },
      { id: 9, name: 'Black Widow' },
      { id: 10, name: 'Wolverine' }
    ];

    this.mockApiService.postHeroes(heroes).subscribe({
      next: (response) => {
        console.log(response);
        // Si la llamada es exitosa, puedes hacer lo que necesites aquí
        this.snackBar.open('Mock Heroes Inserted', 'Close');

        this.getHeroes();
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
        // Si se produce un error mostrar un mensaje 
        this.snackBar.open('Heroes Already Exists, cannot insert data', 'Close');

      }
    });
  }

  getHeroes(): void {
    this.mockApiService.getHeroes()
      .subscribe(heroes => {
        this.dataSource.data = heroes;
        this.loading = false;
      });


  }

  deleteHeroe(id: number): void {
    this.loading = true;
    this.mockApiService.deleteHeroe(id).subscribe(() => {
      this.snackBar.open('Heroe Deleted successfully', 'Close');
      this.getHeroes();
    });
  }








  public editHeroe(id: number): void {
    return;
  }





}
