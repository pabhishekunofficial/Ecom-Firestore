import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";

 import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhJHFH8Ji4m2YspN8Nb7Pv2yG-l9-2C1k",
    authDomain: "e-com-crown.firebaseapp.com",
    projectId: "e-com-crown",
    storageBucket: "e-com-crown.appspot.com",
    messagingSenderId: "768373900522",
    appId: "1:768373900522:web:1edc008ef86103b5d44393"
  };
  

  const firebaeApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth,provider) 

//   export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={})=>{
    if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log("error creating user",error.message);
        }
    }

     return userDocRef;


  }

  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser = async ()=> await signOut(auth);

  export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth,callback);