import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const minTime = new Date();
minTime.setHours(7, 0, 0);
export const maxTime = new Date();
maxTime.setHours(20, 0, 0);
export const calendarInitialState = {
  events: [],
  equipments: [],
  people: [],
  modal: {
    id: null,
    title: null,
    desc: null,
    start: new Date(2018, 4, 4, 7, 0, 0),
    end: new Date(2018, 4, 4, 8, 0, 0),
  },
  modalOpen: false,
  equipmentsOpen: false,
  peopleOpen: false,

}