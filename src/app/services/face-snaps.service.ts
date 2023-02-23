import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-app.model";

//declarer une classe comme etant un service
@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 200
        },

        {
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createDate: new Date(),
            snaps: 10

        },

        {
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imgUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createDate: new Date(),
            snaps: 50
        }
    ]


}