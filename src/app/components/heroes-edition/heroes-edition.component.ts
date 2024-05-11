import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroeModel';
import { MockApiService } from 'src/app/services/mock-api.service';

@Component({
  selector: 'app-edition',
  templateUrl: './heroes-edition.component.html',
  styleUrls: ['./heroes-edition.component.scss']
})


export class HeroesEditionComponent {
  title = ' Loading...'
  editing: boolean | null = null; // Variable to determine if the hero is being edited or created
  loading = true;

  receivedId = null;


  heroForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private mockApiService: MockApiService, private snackBar: MatSnackBar, private router: Router) {

    // Get the ID from the route parameters and set the title and form values accordingly (edition or creation)
    this.route.params.subscribe(params => {
      this.receivedId = params['idHero'] || null; // Retrieve the ID from route parameters or set it to null if it doesn't exist
      if (this.receivedId) {
        this.title = 'Edit Hero';
        this.editing = true;
        this.mockApiService.getHeroById(this.receivedId).subscribe((hero: HeroeModel) => {

          // Create the form with the validators for the edition
          this.heroForm = new FormGroup({
            id: new FormControl({ value: hero.id, disabled: true }),
            name: new FormControl(hero.name, [
              Validators.required,
              Validators.minLength(3),
            ])
          });


          this.loading = false;
        });
      } else {
        this.editing = false;
        this.title = 'New Hero';


        // Create the form with the validators for the creation
        this.heroForm = new FormGroup({
          id: new FormControl({ value: 0, disabled: true }),
          name: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ])
        });

        this.loading = false;
      }
    });
  }

  // Edition
  saveChanges() {

    // ensure that the receivedId is not null or undefined and that the heroForm value is not null or undefined (in practice allways true because of the validators)
    if (this.receivedId && this.heroForm.value.name) {
      let hero: HeroeModel = {
        id: this.receivedId,
        name: this.heroForm.value.name
      };
      this.loading = true;
      this.mockApiService.putHeroe(hero).subscribe({
        next: () => {
          this.snackBar.open('Hero saved', 'Close');
          this.loading = false;
          this.router.navigate(['heroesList']);

        },
        error: (error) => {
          this.loading = false;
          this.snackBar.open('Error editing the Hero', 'Close');

        }
      });
    } else {
      this.snackBar.open('Error editing the Hero', 'Close');
      this.loading = false;
    }

  }

  // Creation
  saveCreate() {
    // ensure that the receivedId is not null or undefined and that the heroForm value is not null or undefined (in practice allways true because of the validators)
    if (this.heroForm.value.name) {
      let hero: HeroeModel = {
        id: 0,
        name: this.heroForm.value.name
      };
      this.loading = true;

      this.mockApiService.createHero(hero).subscribe({
        next: () => {
          this.snackBar.open('New hero saved', 'Close');
          this.loading = false;
          this.router.navigate(['heroesList']);

        },
        error: (error) => {
          this.snackBar.open(error.error.message, 'Close');
          this.loading = false;

        }
      });
    } else {
      this.snackBar.open('Error creating the Hero', 'Close');
    }
  }

}
