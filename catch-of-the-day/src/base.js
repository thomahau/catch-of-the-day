import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBGWgUGLRydtmI8y66jibTbGRkmX_MEqEo',
	authDomain: 'fluid-catch-of-the-day.firebaseapp.com',
	databaseURL: 'https://fluid-catch-of-the-day.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());
// named export
export {firebaseApp};
// default export
export default base;
