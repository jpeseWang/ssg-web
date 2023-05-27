import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private readonly contenfulService: ContentfulService) {}

  blogPosts$: Observable<any> | undefined;

  ngOnInit() {
    this.blogPosts$ = this.contenfulService.getAllEntries();
  }
}
