import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { ICard } from '../models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent  implements OnInit {

  cardData: ICard[] = [];
  displayedCards: ICard[] = [];

  constructor(
    private cardService: CardsService
  ) { }

  ngOnInit() {
    this.cardService.getCardsData().subscribe(
      (data: ICard[]) => {
        this.cardData = data;
      }
    );
  }

  updateDisplayedCards(paginatedData: ICard[]) {
    this.displayedCards = paginatedData;
  }
}
