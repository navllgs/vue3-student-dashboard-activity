import { get, push, ref, remove, set, update } from 'firebase/database'
import { database } from './firebase.js'

export async function getData(path) {
  const snapshot = await get(ref(database, path))
  const data = snapshot.val() ?? {}

  return Object.entries(data).map(([id, value]) => ({
    ...value,
    id
  }))
}

export async function createData(path, data) {
  const dataReference = push(ref(database, path))
  await set(dataReference, data)
  return dataReference.key
}

export function updateData(path, id, changes) {
  return update(ref(database, `${path}/${id}`), changes)
}

export function deleteData(path, id) {
  return remove(ref(database, `${path}/${id}`))
}
