import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogsRoutingModule } from './blogs.routing';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [BlogsComponent, BlogPostComponent, BlogCreateComponent],
  imports: [CommonModule,
     BlogsRoutingModule,
     CKEditorModule,
     MatDialogModule
    ],
})
export class BlogsModule {}
