#Task

This project includes Role based authentication 1) Create an app where there are 3 route: login, register, category, product. User can access category route only if he is logged in and his role is admin, and product route only if he is logged in and his role is supervisor (for data storage and retreival use JSON Server).
2) Use the application that was created in authentication task, an add an observable to it which stores the token in it, use this observable in the component to check whether the user is logged in or not.
3) Create an interceptor that should append token to http headers, as well as create another dummy header X-USER which will hold user name (for api use JSON-Server)(wip).



# EventsHub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

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
