import { db, firebaseAuth, storageKey } from '../config/constants'


export function auth(email, pw) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .then(localStorage.setItem(storageKey, email))
}

export function logout() {
  localStorage.removeItem(storageKey)
  return firebaseAuth().signOut()
}

export function login(email, pw) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, pw)
    .then(localStorage.setItem(storageKey, email))
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser(user) {
  return db
    .collection(`users`)
    .add({
      email: user.email,
      uid: user.uid
    })
    .then(docRef => docRef)
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}

