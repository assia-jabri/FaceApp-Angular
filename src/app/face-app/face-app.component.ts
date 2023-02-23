import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-app.model';

@Component({
  selector: 'app-face-app',
  templateUrl: './face-app.component.html',
  styleUrls: ['./face-app.component.scss']
})
export class FaceAppComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;


  buttonText!: string;


  ngOnInit() {

    this.buttonText = "Oh! Snap";
  }
  onSnap() {
    if (this.buttonText === "Oh! Snap") {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un snap! ';
    } else {
      this.faceSnap.snaps--;

      this.buttonText = "Oh! Snap";
    }
  }
}
