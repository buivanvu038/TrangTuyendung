// firebase.ts

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REDIRECT_API_KEY,
  authDomain: "api-7488f.firebaseapp.com",
  projectId: "api-7488f",
  storageBucket: "api-7488f.appspot.com",
  messagingSenderId: "460779588290",
  appId: "1:460779588290:web:cde96a115b231234ac895b",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export the initialized Firebase app and database
export const database = getDatabase(app);
