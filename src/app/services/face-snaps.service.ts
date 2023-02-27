import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-app.model";

//declarer une classe comme etant un service
@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 200
        },

        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createDate: new Date(),
            snaps: 10

        },

        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imgUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createDate: new Date(),
            snaps: 50
        },
        {
            id: 4,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 200
        },

        {
            id: 5,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createDate: new Date(),
            snaps: 10

        },

        {
            id: 6,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imgUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createDate: new Date(),
            snaps: 50
        }

    ]

    getSnapFaces(): FaceSnap[] {
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }
    /*snapFaceSnapById(faceSanpId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.faceSnaps.find(FS => FS.id === faceSanpId);
        if (faceSnap) {
            faceSnap.snaps++;
        } else {
            throw new Error('FaceSnap Not Found!');
        }

    }*/

    snapFaceSnapById(faceSanpId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSanpId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}


