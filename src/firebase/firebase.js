import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCDfkuCePokOswozfb5X7WAs_03e1lXApI",
    authDomain: "expensify-app-9ab48.firebaseapp.com",
    databaseURL: "https://expensify-app-9ab48.firebaseio.com",
    projectId: "expensify-app-9ab48",
    storageBucket: "expensify-app-9ab48.appspot.com",
    messagingSenderId: "677985812009"
};

firebase.initializeApp(config)

const database = firebase.database()
