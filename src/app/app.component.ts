import { Component } from '@angular/core';

@Component({
	selector: 'pokemon-app',
	template: `<h1>Bonjour, {{name}} !</h1><br><h2>Bonne nuit, {{name}}`
})
export class AppComponent {name = 'Michel'; }