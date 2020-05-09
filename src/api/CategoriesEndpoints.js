import firebase from 'firebase'

const getCategories = async () => {
  const snapshot = await firebase.firestore().collection('categorii').get()
  return snapshot.docs.map((doc) => doc.data())
}

export default {
  getCategories,
}
  