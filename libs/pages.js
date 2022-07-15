// import { doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, collection, query, orderBy, setDoc } from "firebase/firestore";
// import { db } from "./firebase";

// export const getPages = async () => {
//   return (await getDocs(query(collection(db, "pages"), orderBy("displayname")))).docs.map(snap => {
//     return snap.data();
//   });
// };

// export const getPage = async id => {
//   const snap = await getDoc(doc(db, `pages/${id}`));
//   return snap.data();
// };

// export const addPage = async page => {
//   return await addDoc(collection(db, `pages`), page);
// };

// export const updatePage = async page => {
//   return await updateDoc(doc(db, `pages/${page.id}`), page);
// };

// export const setPage = async page => {
//   return await setDoc(doc(db, `pages/${page.uid}`), page);
// };

// export const deletePage = async id => {
//   return await deleteDoc(doc(db, `pages/${id}`));
// };

const pages = {
  home: {
    url: {
      en: "/",
      fr: "/"
    },
    title: {
      en: "Digital Marketing Expert - Dominik Giroux",
      fr: "Expert Marketing Digital - Dominik Giroux"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  about: {
    url: {
      en: "about",
      fr: "a-propos"
    },
    title: {
      en: "About",
      fr: "À propos"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  services: {
    url: {
      en: "services",
      fr: "services"
    },
    title: {
      en: "Services",
      fr: "Services"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  blog: {
    url: {
      en: "blog",
      fr: "blogue"
    },
    title: {
      en: "Blog",
      fr: "Blogue"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  contact: {
    url: {
      en: "contact",
      fr: "contact"
    },
    title: {
      en: "Contact",
      fr: "Contact"
    },
    description: {
      en: "Tell me about your project and it'll be my pleasure to evaluate it for you",
      fr: "Parlez-moi de votre projet et il me fera grand plaisir de l'évaluer"
    }
  },
  privacy: {
    url: {
      en: "privacy-policy",
      fr: "politique-de-confidentialite"
    },
    title: {
      en: "Privacy policy",
      fr: "Politique de confidentialité"
    },
    description: {
      en: "",
      fr: ""
    }
  }
};

export const getPage = async id => {
  return pages[id];
};
