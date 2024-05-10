import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroeModel';
import { MockApiService } from 'src/app/services/mock-api.service';

@Component({
  selector: 'app-edition',
  templateUrl: './heroes-edition.component.html',
  styleUrls: ['./heroes-edition.component.css']
})


export class HeroesEditionComponent {
  title = ' Loading...'
  editing: boolean | null = null; // Variable to determine if the hero is being edited or created

  receivedId = null;
  hero: HeroeModel = { id: 0, name: '' };
  loading = true;
  constructor(private route: ActivatedRoute, private mockApiService: MockApiService, private snackBar: MatSnackBar) {

    this.route.params.subscribe(params => {
      this.receivedId = params['idHero'] || null; // Retrieve the ID from route parameters or set it to null if it doesn't exist
      if (this.receivedId) {
        this.title = 'Edit Hero';
        this.editing = true;
        this.mockApiService.getHeroById(this.receivedId).subscribe((hero: HeroeModel) => {
          this.hero = hero;
          this.loading = false;
        });
      } else {
        this.editing = false;
        this.title = 'New Hero';
        this.loading = false;
      }
    });
  }


  saveChanges() {
    this.loading = true;

    this.mockApiService.putHeroe(this.hero).subscribe({
      next: (response) => {
        console.log(response);
        this.snackBar.open('Heroes saved', 'Close');
        this.loading = false;

      },
      error: (error) => {
        this.loading = false;
        this.snackBar.open('Error editing the Hero', 'Close');

      }
    });
  }

  saveCreate() {
    this.loading = true;
    this.mockApiService.createHero(this.hero).subscribe({
      next: (response) => {
        this.snackBar.open('New hero saved', 'Close');
        this.loading = false;

      },
      error: (error) => {
        this.loading = false;
        this.snackBar.open(error.error.message, 'Close');
        this.loading = false;

      }
    });
  }

}
