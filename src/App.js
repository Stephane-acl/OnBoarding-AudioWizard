import React from 'react';
import Img from'./Img/wizard.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';

import TopNav from "./components/TopNav";
import MainApp from "./components/MainApp";
import LeftNav from "./components/LeftNav";

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <TopNav Img={Img}/>
                <MainApp/>
                <LeftNav/>
            </Router>
        </div>
    );
}

export default App;
