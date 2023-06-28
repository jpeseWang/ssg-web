import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoComponent } from './video/video.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  constructor(private dialog: MatDialog) {}
  openFullscreenVideo() {
    const dialogRef = this.dialog.open(VideoComponent, {
      width: '140%',
      height: '90%',
    });
  }
}
