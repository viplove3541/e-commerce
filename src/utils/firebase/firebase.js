// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEyoKswUfccVJAiv3m3FvNVD156CnjKAo",
  authDomain: "e-commerce-db-80db9.firebaseapp.com",
  projectId: "e-commerce-db-80db9",
  storageBucket: "e-commerce-db-80db9.appspot.com",
  messagingSenderId: "917921992632",
  appId: "1:917921992632:web:a55a3e9d30de953734094d",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth();

// Initialize the Google Auth provider
const provider = new GoogleAuthProvider();

// Set custom parameters for the provider
provider.setCustomParameters({
  prompt: "select_account",
});

// Function to sign in with Google Popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the users", error.message);
    }
  }
  return userDocRef;
};
