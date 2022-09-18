import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../libs/firebase";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [displayname, setDisplayname] = useState(null);

  useEffect(() => {
    if (user) {
      (async function () {
        const snap = await getDoc(doc(db, `users/${user.uid}`));
        if (snap.exists()) {
          console.log("Document data:", snap.data());
          setDisplayname(snap.data()?.displayname);
        } else {
          setDisplayname(null);
          console.log("No such document!");
        }
      })();
    } else {
      setDisplayname(null);
    }
  }, [user]);

  return { user, displayname };
}
