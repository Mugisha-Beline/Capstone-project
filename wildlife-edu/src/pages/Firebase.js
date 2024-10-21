// src/Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDi5B9roo9nQ0VFfb4sWDrZM0WpIYKiqPQ",
  authDomain: "wildlifedu-website.firebaseapp.com",
  projectId: "wildlifedu-website",
  storageBucket: "wildlifedu-website.appspot.com",
  messagingSenderId: "252121860688",
  appId: "1:252121860688:web:c8bec950ce14ce8f7b5f55",
  measurementId: "G-F5F9G7KD78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore (database)

// Firebase Authentication Functions
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error during sign up:", error.message);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};

// Firestore Functions for Contact Form
const addContactFormEntry = async (entry) => {
  try {
    const docRef = await addDoc(collection(db, "contactForms"), entry);
    console.log("Contact form entry added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding contact form entry:", error.message);
    throw error;
  }
};

const getContactForms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "contactForms"));
    const forms = [];
    querySnapshot.forEach((doc) => {
      forms.push({ id: doc.id, data: doc.data() });
    });
    return forms;
  } catch (error) {
    console.error("Error fetching contact forms:", error.message);
    throw error;
  }
};

// Export Firebase services and functions
export { auth, db, signUp, login, addContactFormEntry, getContactForms };
