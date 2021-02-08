import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBHdvRge3LtvqnU6spA37CBVvfAySk_fqQ",
	authDomain: "netflix-clone-f5981.firebaseapp.com",
	projectId: "netflix-clone-f5981",
	storageBucket: "netflix-clone-f5981.appspot.com",
	messagingSenderId: "639553849991",
	appId: "1:639553849991:web:671cfa56faf8523f084622",
	measurementId: "G-P0JQN6YJZ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
