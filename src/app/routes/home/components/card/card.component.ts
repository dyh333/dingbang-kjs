import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 _cardData: Object;
  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.loadCard().subscribe({
      next: (cardData) => {
        console.log(cardData);
        this._cardData = cardData;
      }
    });
  }

}
