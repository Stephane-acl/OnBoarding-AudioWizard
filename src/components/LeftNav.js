import React from "react";
import {Link} from "react-router-dom";

const LeftNav = () => {
    return (
        <nav className="d-flex flex-column align-items-center position-fixed h-100 mr-0 border border-primary border-top-0 left-links">
                <div className="box"><Link to='/'>Accueil</Link></div>
                <div className="box"><Link to='/FirstPage'>Première visite</Link></div>
                <div className="box"><Link to='#'>Adaptation</Link></div>
        </nav>
    )
}

export default LeftNav;