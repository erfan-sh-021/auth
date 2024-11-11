import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA19vj4JvSmcU--r7n-IaL_7mHUsI5Itcs",
  authDomain: "cart-8f018.firebaseapp.com",
  projectId: "cart-8f018",
  storageBucket: "cart-8f018.firebasestorage.app",
  messagingSenderId: "416296859291",
  appId: "1:416296859291:web:4f5520960043329253783e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);