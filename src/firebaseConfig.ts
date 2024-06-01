const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { AddCards } from '../types/types';

const firebaseConfig = {
	apiKey: 'AIzaSyDtQgoopy44eELAYh4ZbehZ420uUUVNtVA',
	authDomain: 'parcial-21baa.firebaseapp.com',
	projectId: 'parcial-21baa',
	storageBucket: 'parcial-21baa.appspot.com',
	messagingSenderId: '281364649921',
	appId: '1:281364649921:web:f3a9a068ee4a5b1b860140',
	measurementId: 'G-WNZ67ZW251',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const addmusic = async (FormData: Omit<AddCards, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'Music'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getmusic = async () => {
	const querySnapshot = await getDocs(collection(db, 'Music'));
	const Arraysongs: Array<AddCards> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs;
};
