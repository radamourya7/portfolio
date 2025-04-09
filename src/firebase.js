import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, increment } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to update visitor count
export const updateVisitorCount = async () => {
  try {
    const counterRef = doc(db, 'visitors', 'counter');
    const counterDoc = await getDoc(counterRef);
    
    if (!counterDoc.exists()) {
      // Initialize counter if it doesn't exist
      await setDoc(counterRef, { count: 1 });
    } else {
      // Increment counter
      await setDoc(counterRef, { count: increment(1) }, { merge: true });
    }
    
    // Get the updated count
    const updatedDoc = await getDoc(counterRef);
    return updatedDoc.data().count;
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return null;
  }
};

// Function to get current visitor count
export const getVisitorCount = async () => {
  try {
    const counterRef = doc(db, 'visitors', 'counter');
    const counterDoc = await getDoc(counterRef);
    
    if (counterDoc.exists()) {
      return counterDoc.data().count;
    }
    return 0;
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return null;
  }
}; 