// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBceNlnfE5x5wVT28KQ2AGkyV2UX_IZhW0",
  authDomain: "chef-recipe-hunter-clien-459eb.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-459eb",
  storageBucket: "chef-recipe-hunter-clien-459eb.appspot.com",
  messagingSenderId: "569765523803",
  appId: "1:569765523803:web:b3b0a2d721c7a7bc6c2a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;