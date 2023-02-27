import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-app.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-app',
  templateUrl: './face-app.component.html',
  styleUrls: ['./face-app.component.scss']
})
export class FaceAppComponent implements OnInit {

  // angular automatically send and update data in the service which is the parent component to teh faceSnap property

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {

    this.buttonText = "Oh! Snap";
  }
  onSnap() {
    if (this.buttonText === "Oh! Snap") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un snap! ';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');

      this.buttonText = "Oh! Snap";
    }
  }
}
