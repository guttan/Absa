import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABSA Solutions Inc';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle(this.title);

    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}, true);
    meta.addTag({name: 'description', content: 'ABSA Solutions Inc is a Software Product and Services Consulting Company '}, true);
    meta.addTag({name: 'author', content: 'Naveen Gutta'}, true);
    meta.addTag({name: 'generator', content: 'Jekyll v3.8.6'}, true);

  }
}
