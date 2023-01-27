import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './componenets/Menu';
import Home from './componenets/Home';
import About from './componenets/About';
import HeadTail from './componenets/HeadTail';
import Pnf from './componenets/Pnf';


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
            <Menu/>
            <ToastContainer position={"top-right"} theme={"colored"} autoClose={"9000"} />
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/home'} element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path={'/headtail'} element={<HeadTail/>} />
                    <Route path={'/*' } element={<Pnf/>} />
                </Routes>
    </BrowserRouter>
  )
}

export default App;
