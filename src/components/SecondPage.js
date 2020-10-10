import React, {useContext} from "react";
import {Link} from "react-router-dom";
import InfosContext from "./InfosContext";


const SecondPage = () => {

    const {setGender} = useContext(InfosContext)

    const handleChange = (e) => {
        setGender(e.target.id)
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-center align-items-center border border-dark p-4 w-75 mt-lg-5">
                Peux-tu indiquer son sexe ?
            </div>
            <div className="d-flex flex-row mt-lg-5">
                <Link to="/ThirdPage">
                    <div className="box rounded-lg mr-lg-5">
                        <button
                            className="border-0 bg-transparent font-weight-bold"
                            type="button"
                            id='man'
                            onClick={(e) => handleChange(e)}
                        >
                            Homme
                        </button>
                    </div>
                </Link>
                <Link to="/ThirdPage">
                    <div className="box rounded-lg ml-lg-5">
                        <button
                            className="border-0 bg-transparent font-weight-bold"
                            type="button"
                            id='woman'
                            onClick={(e) => handleChange(e)}
                        >
                            Femme
                        </button>
                    </div>
                </Link>
            </div>
            <span className='display-1 mt-lg-5'>
                <Link to="/FirstPage"><i className="fas fa-long-arrow-alt-left"/></Link>
            </span>
        </div>
    );
}

export default SecondPage;