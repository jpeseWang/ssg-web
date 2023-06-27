import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VideoComponent } from '../movie/video/video.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  quote =
    '“People who love themselves, don’t hurt other people. The more we hate ourselves, the more we want others to suffer.”';
  openFullscreenVideo() {
    const dialogRef = this.dialog.open(VideoComponent, {
      width: '140%',
      height: '90%',
    });
  }

  ngOnInit() {}
}
