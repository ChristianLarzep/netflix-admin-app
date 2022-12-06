import firebase from "firebase"; // This type of import is only possible by using firebase 8.7.1

// For more recent version firebase is imported like this:
// Not sure if 'storage' has been deprecated and google-cloud has replaced it: https://stackoverflow.com/questions/41352150/typeerror-firebase-storage-is-not-a-function
//import 'firebase/storage'; 
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

/*
const gcloud = require('google-cloud')

const storage = gcloud.storage({
    projectId: '<projectID>',
    keyFilename: 'service-account-credentials.json',
});
*/

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

firebase.initializeApp( firebaseConfig );

const storage = firebase.storage();

export default storage;