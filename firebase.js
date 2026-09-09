import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
  getDatabase,
  ref,
  get,
  set,
  update,
  onValue,
  runTransaction,
  push
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDpy3qasZ_EAi8jXhFyE24fy2RSNUkmmHk",
  authDomain: "crrsa-queue-system.firebaseapp.com",
  projectId: "crrsa-queue-system",
  storageBucket: "crrsa-queue-system.firebasestorage.app",
  messagingSenderId: "634458683623",
  appId: "1:634458683623:web:3d9aed8367b8745fc10a42",
  measurementId: "G-BNZL78F35S",

  databaseURL: "https://crrsa-queue-system-default-rtdb.europe-west1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


// Main queue reference
const queueRef = ref(db, "queue");


// Export Firebase database
export {
  db,
  queueRef,
  ref,
  get,
  set,
  update,
  onValue,
  runTransaction,
  push
};
