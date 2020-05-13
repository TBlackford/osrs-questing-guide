import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import QuestTable from "./components/QuestTable";
import RuneScapeIcon from "./components/RuneScapeIcon";

function App() {
    return (
        <div className="App">
            <Navbar />

            <br />

            <div className="container">
                <QuestTable />

            </div>
        </div>
    );
}

export default App;
