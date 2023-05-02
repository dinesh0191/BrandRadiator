import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5nH_gZNHrM2jbvF85UA20Dgnl-sbB9Fo",
  authDomain: "frontend-fd537.firebaseapp.com",
  projectId: "frontend-fd537",
  storageBucket: "frontend-fd537.appspot.com",
  messagingSenderId: "186452289278",
  appId: "1:186452289278:web:7d1d5bdcfc933875c327af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
