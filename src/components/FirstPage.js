import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import InfosContext from "./InfosContext";

const FirstPage = () => {

    const {user, setUser} = useContext(InfosContext)

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };


    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-center align-items-center border border-dark p-4 w-75 mt-lg-5">
                Peux-tu indiquer l'identité du patient ?
            </div>
            <div className="d-flex flex-row mt-lg-5">
                <div className="box rounded-lg mr-lg-5">
                    <input className="w-100 border-0"
                           type="text"
                           placeholder='Nom'
                           value={user.lastName}
                           onChange={(e) => handleChange(e)}
                           name='lastName'/>
                </div>
                <div className="box rounded-lg ml-lg-5">
                    <input className="w-100 border-0"
                           type="text"
                           placeholder='Prénom'
                           value={user.firstName}
                           onChange={(e) => handleChange(e)}
                           name='firstName'/>
                </div>
            </div>
            <span className='display-1 mt-lg-5'>
                <Link to="/SecondPage">
                    <button className="border-0 bg-transparent text-primary">
                        <i className="fas fa-long-arrow-alt-right"/>
                    </button>
                </Link>
            </span>
        </div>
    );
}

export default FirstPage;