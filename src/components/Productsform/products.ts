import { AddCards } from '../../types/types';
import { addmusic } from '../../firebaseConfig';

const FormData: Omit<AddCards, 'id'> = {
	image: '',
	Autor: '',
	Album: '',
	stock: '',
};

class Songs extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeimage(e: any) {
		FormData.image = e?.target?.value;
	}
	changeAutor(e: any) {
		FormData.Autor = e?.target?.value;
	}
	changeAlbum(e: any) {
		FormData.Album = e?.target?.value;
	}
	changestock(e: any) {
		FormData.stock = e?.target?.value;
	}

	submitForm() {
		addmusic(FormData);
	}

	async render() {
    if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Vinyl Store';
			this.shadowRoot?.appendChild(title);

			const image = this.ownerDocument.createElement('input');
			image.type = 'file';
			image.addEventListener('change', this.changeimage);
			this.shadowRoot?.appendChild(image);

			const Autor = this.ownerDocument.createElement('input');
			Autor.placeholder = 'Autor';
			Autor.addEventListener('change', this.changeAutor);
			this.shadowRoot?.appendChild(Autor);

			const Album = this.ownerDocument.createElement('input');
			Album.placeholder = 'Album';
			Album.addEventListener('change', this.changeAlbum);
			this.shadowRoot?.appendChild(Album);

			const stock = this.ownerDocument.createElement('input');
			stock.placeholder = 'Stock';
			stock.addEventListener('change', this.changestock);
			this.shadowRoot?.appendChild(stock);


			const save = this.ownerDocument.createElement('button');
			save.innerText = 'ADD';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);

			const songs = this.ownerDocument.createElement('custom-songs');
			this.shadowRoot?.appendChild(songs);

			this.shadowRoot?.appendChild(container);

		});
	}
}
