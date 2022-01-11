import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAg9kB8WEpDs3cHkMJNKQ4GO_RA-P_tuwc",
    authDomain: "twitterclone-6c140.firebaseapp.com",
    databaseURL: "https://twitterclone-6c140-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "twitterclone-6c140",
    storageBucket: "twitterclone-6c140.appspot.com",
    messagingSenderId: "879425228770",
    appId: "1:879425228770:web:ea9586bec39521d51573bb",
    measurementId: "G-LKF179XKY0"
  };
// const firebaseConfig = {
//     apiKey: "AIzaSyALCLBa55Gzven0Vd13A_FP1KzJJcusRxU",
//     authDomain: "mediaapp-d96d1.firebaseapp.com",
//     projectId: "mediaapp-d96d1",
//     databaseURL: "https://mediaapp-d96d1.firebaseio.com",
//     storageBucket: "mediaapp-d96d1.appspot.com",
//     messagingSenderId: "275785490972",
//     appId: "1:275785490972:web:65ccaff57e382da10cb5d9",
//     measurementId: "G-E3J91N1ET9"
//   };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage = firebase.storage();


 export {db,auth,storage}
//  https://mediaapp-d96d1-default-rtdb.europe-west1.firebasedatabase.app
 
  