import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'string';

  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }

}

/**
 * For obvious reasons, we'll not dive deep into learning TypeScript. Even so, let's 
 * notice that the file defines an AppComponent class, which declares a field title of type 
 * string (lower-cased). Definitively, it's typed JavaScript.
 * 
 * Additionally, the constructor initializes the field with a string value, which is pretty 
 * similar to what we do in Java.
 * 
 * The most relevant part is the @Component metadata marker or decorator, which defines three 
 * elements:
 * 
 * selector – the HTML selector used to bind the component to the HTML template file
 * templateUrl – the HTML template file associated with the component
 * styleUrls – one or more CSS files associated with the component
 * 
 * As expected, we can use the app.component.html and app.component.css files to define the 
 * HTML template and the CSS styles of the root component.
 * 
 * Finally, the selector element binds the whole component to the <app-root> selector 
 * included in the index.html file.
 * 
 */
