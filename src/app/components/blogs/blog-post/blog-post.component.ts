import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly contentfulService: ContentfulService
  ) {}

  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.blogPost$ = this.contentfulService.getEntryById(id);
    });
  }
}
