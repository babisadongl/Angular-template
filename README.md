# Novelty Admin Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

## Machine Setup

**Prerequisite**

1. nodejs
2. npm
3. vscode
4. git
5. angular cli
6. prettier (extension installed on vscode)
7. run `npm install` (inside the root folder after all prerequisite is met

## Development server

environments folder includes files with secret keys and thus are to be maintained offline. Request one with your project manager or lead if you don't see one.
It should be placed unded src folder of this project.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To run specific environments build locally

Run `ng serve --configuration=dev` or `ng serve -c dev` for a development environment serve. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --configuration=uat` or `ng serve -c uat` for a uat environment serve. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --configuration=production` or `ng serve -c production` for a production environment serve. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `npm run build -- --configuration=uat` for a uat environment build. The build artifacts will be stored in the `dist/` directory.
Run `npm run build -- --configuration=dev` for a development environment build. The build artifacts will be stored in the `dist/` directory.
Run `npm run build -- --configuration=production` for a production environment build. The build artifacts will be stored in the `dist/` directory.

## Formating code

Run `npm run format` to format the code with recommended style guidelines

## Running linter checks

Run `ng lint` to execute the linter check.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
