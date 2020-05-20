import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDc_t2M7zeveoFq2EJwduScMvErwcSSutA",
    authDomain: "tienda-angular2-253cf.firebaseapp.com",
    databaseURL: "https://tienda-angular2-253cf.firebaseio.com",
    projectId: "tienda-angular2-253cf",
    storageBucket: "tienda-angular2-253cf.appspot.com",
    messagingSenderId: "559646060920",
    appId: "1:559646060920:web:ce72a5afa38b3cc128d88d",
    measurementId: "G-16TE7VZT72"
}

const fire = firebase.initializeApp(config)

export default fire;