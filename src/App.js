import './App.css';
import { getAuth } from "firebase/auth";
import app from './chipa.init';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Sign-Up/SignUp';
const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <h1>Chipapur Landing Page</h1>
      <Header></Header>
      <Routes>
        <Route path ="/login" element ={<Login></Login>}></Route>
        <Route path ="/sign-up" element ={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
