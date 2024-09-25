import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/index'
import RepositoriesPage from './pages/RepositoriesPage';

export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/repositories' element={<RepositoriesPage />} />
                <Route path='/' element={<MainPage />} />
            </Routes>
        </Router>
    );
}