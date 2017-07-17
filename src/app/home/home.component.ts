import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    title.setTitle('Eniola\'s Home page');

    meta.addTags([
      {
        name: 'author', content: 'la-any.com'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'la-any.com great discription.'
      }
    ])
  }

  ngOnInit() {
  }

}
