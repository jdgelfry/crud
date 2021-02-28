import * as firebase from "firebase";
import "firebase/firestore";
import { firebaseApp } from "./firebase";

const db = firebase.firestore(firebaseApp);

export const getCollection = async (collection) => {
  const result = { statusResponse: false, data: null, error: null };
  try {
    const data = await db.collection(collection).get();
    const arrayData = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    result.statusResponse = true;
    result.data = arrayData;
  } catch (error) {
    result.error = error;
  }
  return result;
};

//agregar un dato a la base de datos
export const addDocument = async (collection, data) => {
  const result = { statusResponse: false, data: null, error: null };
  try {
    const response = await db.collection(collection).add(data);
    result.data = { id: response.id };
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }
  return result;
};

// obtener un dato de la base de dato
export const getDocument = async (collection, id) => {
  const result = { statusResponse: false, data: null, error: null };
  try {
    const response = await db.collection(collection).doc(id).get();
    result.data = { id: response.id, ...response.data };
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }
  return result;
};

//actualizar un dato
export const updateDocument = async (collection, id, data) => {
  const result = { statusResponse: false, error: null };
  try {
    await db.collection(collection).doc(id).update(data);
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }
  return result;
};

//eliminar un dato
export const deleteDocument = async (collection, id) => {
  const result = { statusResponse: false, error: null };
  try {
    await await db.collection(collection).doc(id).delete();
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }
  return result;
};
