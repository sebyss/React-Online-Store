import firebase from "firebase";

const getCategories = async () => {
  const snapshot = await firebase.firestore().collection("categorii").get();
  return snapshot.docs.map((doc) => doc.data());
};

const updateCategory = async (data) => {
  console.log("id", data.id, "data:", data);
  await firebase
    .firestore()
    .collection("categorii")
    .doc(data.id)
    .set({
      ...data,
    });
};

export default {
  getCategories,
  updateCategory,
};
