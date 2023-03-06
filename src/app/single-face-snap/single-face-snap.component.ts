import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-app.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;

  buttonText!: string;
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.buttonText = "Oh! Snap";
    //pour specifier l'id
    //les parametres sont de type string car ils sont rajoutés
    // dans la barre de navigation dans la barre d'adresse
    //il faut caster pour avoir un number en utilisant +
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
  Backbtn() {
    this.router.navigateByUrl('/facesnaps');
  }


}
