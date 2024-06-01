import { AddCards } from '../../types/types';
import { getmusic } from '../../firebaseConfig';
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

	async render() {
		const songs = await getmusic();
		songs.forEach((song: AddCards) => {
			const container = this.ownerDocument.createElement('section');
			const image = this.ownerDocument.createElement('img');
			image.innerText = song.image;
			container.appendChild(image);

			const Autor = this.ownerDocument.createElement('p');
			Autor.innerText = song.Autor;
			container.appendChild(Autor);

			const Album = this.ownerDocument.createElement('p');
			Album.innerText = song.Album;
			container.appendChild(Album);

			const Dateadded = this.ownerDocument.createElement('p');
			Dateadded.innerText = song.stock;
			container.appendChild(Dateadded);

			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('custom-songs', Songs);
export default Songs;
