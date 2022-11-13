import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Accueli from './pages/Accueli';
import Consultant from './pages/Consultant';
import Clients from './pages/Clients';
import Offres from './pages/Offres';
import Contrats from './pages/Contrats';
import Etas from './pages/Etas';
import { useState, useEffect } from 'react'
import React from 'react';

function App() {
    const [data, setData] = useState([{}])
    useEffect(() => {

        fetch("/offres").then(res => res.json()
        ).then( a => {
                setData(a)
                console.log(a)
            }
        )
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Accueli />} />
                    <Route path='/Consultant' element={<Consultant />} />
                    <Route path='/Clients' element={<Clients />} />
                    <Route path='/Offres' element={<Offres data={data}/>} />
                    <Route path='/Contrats' element={<Contrats />} />
                    <Route path='/Etas' element={<Etas />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

  
export default App;
