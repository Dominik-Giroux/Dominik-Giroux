import { doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, collection, query, orderBy, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getUsers = async () => {
  return (await getDocs(query(collection(db, "users"), orderBy("displayname")))).docs.map(snap => {
    return snap.data();
  });
};

export const getUser = async id => {
  const snap = await getDoc(doc(db, `users/${id}`));
  return snap.data();
};

export const addUser = async user => {
  return await addDoc(collection(db, `users`), user);
};

export const updateUser = async user => {
  return await updateDoc(doc(db, `users/${user.id}`), user);
};

export const setUser = async user => {
  return await setDoc(doc(db, `users/${user.uid}`), user);
};

export const deleteUser = async id => {
  return await deleteDoc(doc(db, `users/${id}`));
};
