import React, {useState} from 'react';
import Home from "./Home";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import InfosContext from "./InfosContext";
import {
    Switch,
    Route
} from 'react-router-dom';
import ThirdPage from "./ThirdPage";

function MainApp() {

    const [user, setUser] = useState({
        lastName: '',
        firstName: ''
    })

    const [gender, setGender] = useState('')

    return (
        <InfosContext.Provider value={{user, setUser, gender, setGender}}>
            <main className="position-absolute overflow-auto">
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/FirstPage'>
                        <FirstPage/>
                    </Route>
                    <Route exact path='/SecondPage'>
                        <SecondPage/>
                    </Route>
                    <Route exact path='/ThirdPage'>
                        <ThirdPage/>
                    </Route>
                </Switch>
            </main>
        </InfosContext.Provider>
    );
}

export default MainApp;