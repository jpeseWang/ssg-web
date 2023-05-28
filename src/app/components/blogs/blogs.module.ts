import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogsRoutingModule } from './blogs.routing';

@NgModule({
  declarations: [BlogsComponent, BlogPostComponent],
  imports: [CommonModule, BlogsRoutingModule],
})
export class BlogsModule {}
