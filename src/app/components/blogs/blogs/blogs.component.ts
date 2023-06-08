import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../services';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BlogCreateComponent } from '../blog-create/blog-create.component'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private readonly contenfulService: ContentfulService, private dialog: MatDialog) {}
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    
    dialogConfig.data = {
      title: {
        text: 'Enter Ticket Details',
      },
      content: {
        text: 'Please provide the details for your support ticket.', 
      }
    };

    this.dialog.open(BlogCreateComponent, dialogConfig);
  }
  blogPosts$: Observable<any> | undefined;
  isHearted: boolean = false;

  toggleHeart() {
    this.isHearted = !this.isHearted;
  }
  
  ngOnInit() {
    this.blogPosts$ = this.contenfulService.getAllEntries();
  }

  
}
