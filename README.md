# CapitoleFrontentTechnicalTest

Angular project in the latest LTS version (At the moment of the creation of this test 16.2.12), Node 18.20.2 LTS.


## How to run the project

- Git clone the project, or download it. 
- Open a console a use the command "npm install" in the project folder
- Open a console a use the command "npm serve" in the project folder
- Navigate to `http://localhost:4200/`.


## Project Structure:

*Aclaration:* 
The whole project have a bit of over-engineering, this is not because I can't make it simpler, but rather to show my knowledge in all aspects of angular. (for example: adding Lazy loading to all the components is probably disproportionate to this project. However, I wanted to show that I am familiar with Lazy loading. The same occurs with interceptors, customPipes, sharedModule...).


## Routing:

There are 3 routes, all of them using Lazy Loading:
heroesList, heroesEdit/:id, heroesNew.
There are 3 Lazy Loading modules:
1. angular-material-sharedModule : have the import related with Angular Material, is shared with allmost all components
2. heroesEditionModule: related with the creation and the edition
3. heroesListModule: in charge of the list and filter.


## Components: 
There are 2 main components:

1. Listing (with filter)

    heroes-list.component, that contains heroes-table.component.

    - The filter is made from the Angular Material preset filter, and due to the requirement of "*minimizing the ammount of times that the events is lauched*" I have used a "keydown.enter" instead of "keyup" this way the filter launches when enter is pressed in the keyboard. Also, a button has been added that launch the filter to improve the user experience.
    - The list consists of an Angular Material Table, with pagination and sorting. The pagination is done in the frontend for this prototype, if a lot of heroes is going to be added in the future, it will be recommended to paginate in the Server-Side to avoid overloading the frontend.
    - To complete the requiriment "*The first letter of the heroes must be capitalized*" I created a custom pipe "capitalizeFirst" and added in the name like this {{row.name | capitalizeFirst }}. However, later I found that there are a default pipe in angular called "titlecase", in any case I have left the custom pipe to show how to develop customs pipes.
    this way the name allways will have the first letter capitalized despite being not capitalized from the backend without modifying  the original value.
    - The modal to confirm the deletions is from Angular Material, using the component in /dialogs/delete-confirmation
2. Edition and creation

    - The same component (heroes-edition.component) is used for edition and creation. In creation, it checks from the route if it is an edition or a creation and change his functionality as well.
    - The form allows changing the name and the only validation is that the name must be at least 3 letters. It is done through the use of Angular reactive forms, using FormGroup and FormControl to manage the validations and the values.





## Service

The api services do httpRequest and receive observables from the mock backend interceptor, some values maybe could have been subjects, for example the heroesList. But for versatility, I opted for httpRequests and observables.

## Mock Backend using Interceptor
A mock backend was created using a custom interceptor (mock-backend.interceptor.ts). Its works capturing the httpRequest, simulating the proccessing and returning the observable with the response after a delay (to simulate the proccesing). This allows to mock the api server without external packages or any real backend. A bit of validation and error handling has been added to the fake backend, but without going into too much detail as it is not really relevant to the test.

## Tests

Karma testing is Operational, and a few example tests had been added. Attached screenshot of the results.
To run karma just *ng test* in the folder of the project

#### Sources and resources:
    - Angular Material: https://material.angular.io/guides
    - Angular documentation: https://angular.io/docs
    - Fake backend using interceptors: https://jasonwatmore.com/post/2022/11/30/angular-14-fake-backend-api-to-intercept-http-requests-in-development



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
