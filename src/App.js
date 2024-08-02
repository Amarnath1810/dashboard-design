import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './app/side-bar/SideBar';
import Home from './app/home/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <SideBar>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                        </Routes>
                </SideBar>
            </BrowserRouter>

        </>
    );
}

export default App;
