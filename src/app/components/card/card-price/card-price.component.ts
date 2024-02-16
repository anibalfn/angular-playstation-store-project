import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent implements OnInit {

	@Input()
	gameType: string = "DIGITALTEST"
	@Input()
	gamePrice: string = "$ 199.99"


	constructor() {}
	ngOnInit(): void {

	}

}
