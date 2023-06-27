import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentfulService, BlogService, AuthService } from '../../../services';
import { Observable } from 'rxjs';
import { CommentI } from '../../../interfaces';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly contentfulService: ContentfulService,
    private readonly blogService: BlogService,
    private readonly authService: AuthService
  ) {}

  blogPost$: Observable<any> | undefined;
  comments: CommentI[] = [];
  blog: any;
  isLiked = false;
  isHearted: boolean = false;
  postId!: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.postId = id;

      this.blogPost$ = this.contentfulService.getEntryById(id);

      this.blogService.getBlogById(id).subscribe((res) => {
        this.blog = { ...res.data };
        this.comments = this.blog.comments;
      });
    });
  }

  likeBlog() {
    this.isHearted = !this.isHearted;
    if (!this.isLiked) {
      this.blogService.likeBlog(this.postId).subscribe((res) => {
        console.log(res);
      });
      this.blog.likes++;
      this.isLiked = true;
    } else {
      this.blogService.unlikeBlog(this.postId).subscribe((res) => {
        console.log(res);
      });
      this.blog.likes--;
      this.isLiked = false;
    }
  }

  addComment(value: string) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      alert('You must log in to proceed');
    }

    this.blogService.addComment(this.postId, value).subscribe((res) => {
      console.log(res);
    });

    this.blogService.getBlogById(this.postId).subscribe((res) => {
      this.blog = { ...res.data };
      this.comments = this.blog.comments;
    });
  }

  toggleHeart() {}
}
