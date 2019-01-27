import Firebase from 'firebase'
// Initialize Firebase
let config = {
    apiKey: "AIzaSyDUI4kYarLsSExMvTtNw0rFFmX7g5br9ls",
    authDomain: "campust-f7265.firebaseapp.com",
    databaseURL: "https://campust-f7265.firebaseio.com",
    projectId: "campust-f7265",
    storageBucket: "campust-f7265.appspot.com",
    messagingSenderId: "217545012380"
};

let app = Firebase.initializeApp(config)

export const db = app.database()