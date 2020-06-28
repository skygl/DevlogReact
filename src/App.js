import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./pages/home";
import Register from "./pages/register";

function App() {
    return (
        <div>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/register"} component={Register}/>
        </div>
    );
}

export default App;
