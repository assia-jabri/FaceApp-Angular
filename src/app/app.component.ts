import { Component, OnInit } from '@angular/core';
import { interval, merge, Observable, of } from 'rxjs';
import { map, filter, tap, mergeMap, delay, take, concatMap, exhaustMap } from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }

}
/* redTrainCalled = 0;
  yellowTrainCalled = 0;

  ngOnInit() {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`,
        `color: ${this.translateColor(color)}`)),
      exhaustMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex}
      arrivé!`, `font-weight : bold; color: ${this.translateColor(train.color)}`)
      )
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainCalled++ : this.yellowTrainCalled++;
    const trainIndex = isRedTrain ? this.redTrainCalled : this.yellowTrainCalled;
    console.log(`Train %c ${color} ${trainIndex} appelé!`,
      `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );

  }
  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow ';
  } */


/* logger(text: string): void {
   console.log(`Log: ${text}`);
 } */


//const interval$ = interval(1000);
    // ici on va generer deux instance de l'observable (une nouvelle instance)
    //interval$.subscribe(value => console.log(value));
    // pour montrer que l'observable ne s'execute qu'apres l'inscription
    //setTimeout(() => interval$.subscribe(value => console.log(value)), 3000);



/* this.interval$ = interval(1000).pipe(
  filter(value => value % 3 === 0),
  map(value => value % 2 === 0 ?
    `Je suis ${value} et je suis pair` :
    `Je suis ${value} et je suis impair`
  ),
  tap(text => this.logger(text))
); */