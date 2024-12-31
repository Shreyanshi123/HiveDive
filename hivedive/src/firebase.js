import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig={
        apiKey: "AIzaSyBigftmKiJku_E8j8tuWGphOIMFNBhYs7k",
        authDomain: "hivedive-73933.firebaseapp.com",
        projectId: "hivedive-73933",
        storageBucket: "hivedive-73933.firebasestorage.app",
        messagingSenderId: "520776730331",
        appId: "1:520776730331:web:9894f7c6b3ebe87d49aefe",
        measurementId: "G-L295R0DJRR"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export{auth,provider,storage};
export default db;