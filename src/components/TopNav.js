import React from "react";
import {Link} from "react-router-dom";

function TopNav({Img}) {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-4">
                <div className="container ml-0">
                    <div className="navbar-brand"><Link to='/'><img src={Img} alt="logo"/></Link></div>
                </div>
                <button className="navbar-nav mr-4 btn btn-light text-center p-3">Mon Compte</button>
            </nav>
        </header>
    );
}

export default TopNav;