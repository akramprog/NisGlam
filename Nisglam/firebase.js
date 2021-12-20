type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAL2VemMJi4sMOOk22NQ3D8cnBdzUSmrfo",
    authDomain: "nisglam-69def.firebaseapp.com",
    projectId: "nisglam-69def",
    storageBucket: "nisglam-69def.appspot.com",
    messagingSenderId: "254704698149",
    appId: "1:254704698149:web:56cb7cf246bc9368fa90cc",
    measurementId: "G-TQ7CXBY0H4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
