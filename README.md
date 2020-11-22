# Star Wars Pedia Project
Simple wiki application to consume Swapi.dev in a Angular RxJS and Reactive Forms lecture.

## Instalation
After clone this repository you will need to run `npm i` to install all dependencies.

## How to run
You can see this application online [here](https://andrefillypesilva.github.io/starwars-pedia/)! To run this application you will need only run `ng g`.

## RxJS examples
You will find a basic example of RxJS on `services` files (resources/services). There are an implementation of `Observables` and an implementation of RxJS Operators to format data such as `pluck` (to extract data from an array) and `map` (to map some data into a known object format).

## Reactive Forms examples
You will find a basic example of Reactive Forms implementation on `home.component.ts` file. There is a method called `onSearch` that implement different rules based on form states. If it is valid it does the search, else if search input is untouched it redirects to a random page else it shows a tooltip with a message. Besides that, in the `onInit` method you will find a implementation of a listener to do something if value of search input changes.

![Application Example](https://github.com/andrefillypesilva/starwars-pedia/blob/main/application_example.png?raw=true)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
