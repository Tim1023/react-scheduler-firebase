import { db } from '../config/constants';

export function GetEvents(uid) {
  return db.collection('events').where('ownerId','==',uid).get();
}
export function GetEquipments(uid) {
  return db.collection('equipments').where('ownerId','==',uid).get();
}
export function GetPeople(uid) {
  return db.collection('people').where('ownerId','==',uid).get();
}
export function UpdateEvents(id) {
  return db.collection('events').doc(id)
}
export function UpdateEquipments(id) {
  return db.collection('equipments').doc(id)
}
export function UpdatePeople(id) {
  return db.collection('people').doc(id)
}