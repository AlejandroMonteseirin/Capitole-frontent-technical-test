# CapitoleFrontentTechnicalTest

Angular project in the latest LTS version (At the moment of the creation of this test 16.2.12), Node 18.20.2 LTS.


## How to run the project

- git clone the project  
- open a console a use the command "npm install" in the project folder
- open a console a use the command "npm serve" in the project folder
- open a console a use the command "json-server --watch db.json" in the project folder (that commands lauches the mock api backend, if you dont launch it the app will show error while doing operations as the backend is not accesible)



## Project Structure:


### Filter and Listing


    - The filter is made from the Angular Material preset filter, and due to the requirement of "*minimizing the ammount of times that the events is lauched*" I have used a "keydown.enter" instead of "keyup" this way the filter launches when enter is pressed in the keyboard. Also, a button has been added that launch the filter to improve the user experience.
    - The list consists of an Angular Material Table, with pagination and sorting. The pagination is done in the frontend for this prototype, if a lot of heroes is going to be added in the future, it will be recommended to paginate in the Server-Side to avoid overloading the frontend.
    - To complete the requiriment "*The first letter of the heroes must be capitalized*" I created a custom pipe "capitalizeFirst" and added in the name like this {{row.name | capitalizeFirst }}
    this way the name allways will have the first letter capitalized despite being not capitalized from the backend without modifying  the original value.






## Service

A mock backend was created using "json-server" a npm package to simulate a Api


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
