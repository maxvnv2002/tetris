import './App.css';
import React from "react";
import AppRoutes from "./routes/appRoutes";
import {get} from "axios";
function App() {
    return (
        <div className="App">
            <AppRoutes/>
        </div>
    );
}

export default App;
