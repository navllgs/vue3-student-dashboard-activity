import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { firestore } from './firebase.js'

// Example params: path = 'students' (collection name)
// Firestore response: QuerySnapshot with snapshot.docs
// [
//   {
//     id: 'ExampleStudentId',
//     data(): {
//       name: 'Juan Dela Cruz',
//       course: 'BSIT',
//       year: 1,
//       email: 'juan@example.com',
//       favorite: false,
//       present: false
//     }
//   }
// ]
// Example response: [{ id: 'ExampleStudentId', name: 'Juan Dela Cruz', course: 'BSIT', year: 1, email: 'juan@example.com', favorite: false, present: false }]
export async function getData(path) {
  const snapshot = await getDocs(collection(firestore, path))

  console.log({ snapshot })

  return snapshot.docs.map((document) => ({
    ...document.data(),
    id: document.id
  }))
}

// Example params:
// path = 'students'
// data = {
//   name: 'Juan Dela Cruz',
//   course: 'BSIT',
//   year: 1,
//   email: 'juan@example.com',
//   favorite: false,
//   present: false
// }
// Firestore response: DocumentReference (documentReference.id = 'ExampleStudentId')
// Example response: 'ExampleStudentId'
export async function createData(path, data) {
  // add a new document with an auto-generated id to the collection
  // example:
  // old data: {}
  // new data: {name: "Juan Dela Cruz", favorite: false}
  var documentReference = await addDoc(collection(firestore, path), data)
  console.log({ documentReference })
  return documentReference.id
}

// Example params:
// path = 'students'
// id = 'ExampleStudentId'
// changes = { favorite: true }
// Example response: Promise<void> (resolves when the update completes)
export async function updateData(path, id, changes) {
  // update only the provided fields of the document
  // example:
  // > old data: {name: "Juan Dela Cruz", favorite: false}
  // > changes: { favorite: true }
  // > new data: {name: "Juan Dela Cruz", favorite: true}
  var response = await updateDoc(doc(firestore, path, id), changes)
  console.log({ response })
  return response
}

// Example params: path = 'students', id = 'ExampleStudentId'
// Example response: Promise<void> (resolves when the delete completes)
export async function deleteData(path, id) {
  var response = await deleteDoc(doc(firestore, path, id))
  console.log({ response })
  return response
}
