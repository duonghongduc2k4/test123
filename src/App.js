import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom"
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Detail from "./components/Detail";
import HostList from "./components/HostList";
import Login from './components/Login';
import History from './components/History';
import Confirm from "./components/Confirm";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                        <li>
                            <Link to="/host">Host List</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/edit/:id' element={<Edit />}></Route>
                    <Route path='/detail/:id' element={<Detail />}></Route>
                    <Route path='/host' element={<HostList />}></Route>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/history/:id' element={<History />}></Route>
                    <Route path='/order/:id' element={<Confirm />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;