import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService.getAllEntries();
  }
}
