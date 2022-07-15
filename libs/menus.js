// import { doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, collection, query, orderBy, setDoc } from "firebase/firestore";
// import { db } from "./firebase";

// export const getMenus = async () => {
//   return (await getDocs(query(collection(db, "menus"), orderBy("displayname")))).docs.map(snap => {
//     return snap.data();
//   });
// };

// export const getMenu = async id => {
//   const snap = await getDoc(doc(db, `menus/${id}`));
//   return snap.data();
// };

// export const addMenu = async menu => {
//   return await addDoc(collection(db, `menus`), menu);
// };

// export const updateMenu = async menu => {
//   return await updateDoc(doc(db, `menus/${menu.id}`), menu);
// };

// export const setMenu = async menu => {
//   return await setDoc(doc(db, `menus/${menu.uid}`), menu);
// };

// export const deleteMenu = async id => {
//   return await deleteDoc(doc(db, `menus/${id}`));
// };

// Temporary
export const getMenu = async id => {
  if (id == "main") {
    return {
      links: [
        {
          name: {
            en: "Home",
            fr: "Accueil"
          },
          url: {
            en: "",
            fr: ""
          }
        },
        {
          name: {
            en: "Services",
            fr: "Services"
          },
          url: {
            en: "services",
            fr: "services"
          }
        },
        {
          name: {
            en: "Blog",
            fr: "Blogue"
          },
          url: {
            en: "blog",
            fr: "blogue"
          }
        },
        {
          name: {
            en: "About",
            fr: "À propos"
          },
          url: {
            en: "about",
            fr: "a-propos"
          }
        },
        {
          name: {
            en: "Contact",
            fr: "Contact"
          },
          url: {
            en: "contact",
            fr: "contact"
          }
        }
      ]
    };
  }
};
