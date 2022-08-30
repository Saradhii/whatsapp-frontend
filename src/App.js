import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Homechat from "./components/HomeChat/Homechat";
import SingleChat from './components/HomeChat/SingleChat';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/homechat' element={<Homechat/>}>
        <Route path="/homechat/:id" element={<SingleChat/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
