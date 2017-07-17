import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    title.setTitle('Eniola\'s About page');

    meta.addTags([
      {
        name: 'author', content: 'Eniola Lucas'
      },
      {
        name: 'keywords', content: 'angular teacher, angular seo'
      },
      {
        name: 'description', content: 'la-any.com about page.'
      }
    ])
  }

  ngOnInit() {
  }

}
