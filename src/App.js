import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Router, Routes } from "react-router-dom"

import Login from './components/Login';

function App() {
    return (
        <>
            <Routes>
                
                <Router path='/' element={< Login />}></Router>
           
            </Routes>
        </>
    );
}
export default App;
