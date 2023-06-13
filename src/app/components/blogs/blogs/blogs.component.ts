import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../services';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BlogsCreateComponent } from '../blogs-create/blogs-create.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(
    private readonly contenfulService: ContentfulService,
    private dialog: MatDialog
  ) {}

  blogPosts$: Observable<any> | undefined;
  isHearted: boolean = false;

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(BlogsCreateComponent, dialogConfig);
  }

  toggleHeart() {
    this.isHearted = !this.isHearted;
  }

  ngOnInit() {
    this.blogPosts$ = this.contenfulService.getAllEntries();
  }
}
