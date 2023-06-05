// Importa las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Configuración de tu aplicación de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJsu3eRtfAQTxQOLh41XNmbQRoA6_jL_Q",
  authDomain: "autenticator-a1572.firebaseapp.com",
  projectId: "autenticator-a1572",
  storageBucket: "autenticator-a1572.appspot.com",
  messagingSenderId: "559809236786",
  appId: "1:559809236786:web:c2a81530e1cdcccabf912b",
  measurementId: "G-21NFD2QDJY"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Crea un usuario con email y contraseña
export const createUser = async (email, password) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password);
};

// Inicia sesión con email y contraseña
export const signInUser = async (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};

// Crea un documento en Firestore
export const createFirestoreDocument = async (userId, data) => {
  try {
    const firestore = getFirestore(app);
    const userRef = doc(firestore, "users", userId);
    await setDoc(userRef, data);
    console.log("Documento de Firestore creado exitosamente!");
  } catch (error) {
    console.error("Error al crear el documento de Firestore:", error);
    throw error;
  }
};