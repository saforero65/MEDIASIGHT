import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOhQhhq_BSJjVUahQzh5H9slQnLEV9oeA",
    authDomain: "mediasight-8eb8e.firebaseapp.com",
    projectId: "mediasight-8eb8e",
    storageBucket: "mediasight-8eb8e.appspot.com",
    messagingSenderId: "439611489262",
    appId: "1:439611489262:web:532006deb0bfd1aaf42cff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();