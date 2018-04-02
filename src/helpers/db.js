import { db } from '../config/constants';

export function GetEvents(uid) {
  return db.collection('events').where('ownerId','==',uid).get();
}

export function UpdateEvents(uuid) {
  return db.collection('events').doc(uuid)
}