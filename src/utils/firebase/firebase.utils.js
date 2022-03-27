import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBo8U5frWamITa4Kkuw5k7esFnHu4u01DU",
    authDomain: "crwn-clothing-db-fa8cb.firebaseapp.com",
    projectId: "crwn-clothing-db-fa8cb",
    storageBucket: "crwn-clothing-db-fa8cb.appspot.com",
    messagingSenderId: "89127458198",
    appId: "1:89127458198:web:3f6456a7807c430eb579b7"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();


        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
}