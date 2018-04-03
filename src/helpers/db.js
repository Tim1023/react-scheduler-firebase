import { db } from '../config/constants';

export function GetEvents(uid) {
  return db.collection('events').where('ownerId','==',uid).get();
}
export function GetEquipments(uid) {
  return db.collection('equipments').where('ownerId','==',uid).get();
}
export function UpdateEvents(id) {
  return db.collection('events').doc(id)
}