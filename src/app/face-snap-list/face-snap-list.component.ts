import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-app.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];


  //pour injecter l'instance du service 
  constructor(private faceSnapService: FaceSnapsService) {
  }

  ngOnInit() {

    this.faceSnaps = this.faceSnapService.getSnapFaces();

  }



}

