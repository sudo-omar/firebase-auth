import './App.css';
import Form from './form.js'
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function App() {
  return (
    <>
    <Form></Form>
    <h1>test</h1>
    </>
  );
}

export default App;
