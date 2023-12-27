import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
    return (
        <main>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={'Home'} />
                    <Route path='/about' element={'Home'} />
                    <Route path='/projects' element={'Home'} />
                    <Route path='/contact' element={'Home'} />
                </Routes>
            </Router>
        </main>
    )
}

export default App