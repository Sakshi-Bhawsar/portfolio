import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADtU2RrK4bMwGqLbo-EF4KLF7ZbNFYEDg",
  authDomain: "portfolio-contact-86c99.firebaseapp.com",
  projectId: "portfolio-contact-86c99",
  storageBucket: "portfolio-contact-86c99.firebasestorage.app",
  messagingSenderId: "946343895249",
  appId: "1:946343895249:web:8025a079d9c837e6ae65f0",
  measurementId: "G-YQ7G0N8RHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const firestore = getFirestore(app)