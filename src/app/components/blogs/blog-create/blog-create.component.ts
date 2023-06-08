import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent {
  
  public Editor = ClassicEditor;

  title: string;
  content: string;
  responseStatus: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<BlogCreateComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title.text;
    this.content = data.content.text;
  }

}
