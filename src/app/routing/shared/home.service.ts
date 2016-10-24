import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeModel } from '../home/home.model';

@Injectable()
export class HomeService {

    constructor(){}

    getHomeData(): Observable<HomeModel[]> {
        return Observable.of([
            new HomeModel(
                1, 
            "Nasir", 
            "https://s-media-cache-ak0.pinimg.com/736x/95/a1/95/95a195e665368324f79aeb0904e95d6d.jpg",
            "I am Awesome"
            ),
            new HomeModel(
                2, 
                "Alfyn", 
                "http://vignette4.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg",
                "I am Awesome"
                ),
            new HomeModel(
                3, 
                "Sweety", 
                "https://s-media-cache-ak0.pinimg.com/originals/b9/83/07/b98307169f8449acc79b7eeda7e64b91.jpg",
                "I am Awesome"
                )
        ]
        )
    }    
}