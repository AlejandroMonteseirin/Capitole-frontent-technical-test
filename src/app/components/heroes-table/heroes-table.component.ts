import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroeModel';
import { MockApiService } from 'src/app/services/mock-api.service';
import { DeleteConfirmationComponent } from '../dialogs/delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss'],

})
export class HeroesTableComponent implements AfterViewInit {

  // Table elements
  filterValue: string = '';
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<HeroeModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  loading = true;

  constructor(private mockApiService: MockApiService, private snackBar: MatSnackBar, private router: Router, public dialog: MatDialog) {
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
    this.dialog
      .open(DeleteConfirmationComponent, {
        data: `¿Are you sure you want to delete this Hero?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.loading = true;
          this.mockApiService.deleteHeroe(id).subscribe(() => {
            this.snackBar.open('Heroe Deleted successfully', 'Close');
            this.getHeroes();
          });
        }
      });
  }

  createHeroe() {
    this.router.navigate(['/heroesNew']);

  }

  editHeroe(id: number): void {
    this.router.navigate(['/heroesEdit/' + id]);
  }





}
