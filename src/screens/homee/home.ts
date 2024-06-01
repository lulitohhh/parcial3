import Card, { card } from '../../components/card/card';
import Products, { form } from '../../components/Productsform/products';
import { appState } from '../../store/index';
import { addObserver } from '../../store/index';

class home extends HTMLElement {
	Card: card;
	Products: form;
	cardsContainer: HTMLDivElement;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);

		this.Card = new card();
		this.Products = new form();

		this.render();

		this.cardsContainer = this.ownerDocument.createElement('div');
		this.cardsContainer.className = 'cards-container';
	}

	render() {
		const css = this.ownerDocument.createElement('style');
	}
}
