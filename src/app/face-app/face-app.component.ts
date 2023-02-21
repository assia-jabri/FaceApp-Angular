import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-app',
  templateUrl: './face-app.component.html',
  styleUrls: ['./face-app.component.scss']
})
export class FaceAppComponent implements OnInit {

  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imgUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = ' My bestFrind of all the time...'
    this.createDate = new Date();
    this.snaps = 6;
    this.imgUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = "Oh! Snap";
  }
  onSnap() {
    if (this.buttonText === "Oh! Snap") {
      this.snaps++;
      this.buttonText = 'Oops, un snap! ';
    } else {
      this.snaps--;
      this.buttonText = "Oh! Snap";
    }
  }
}
