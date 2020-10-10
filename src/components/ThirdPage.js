import React, {useContext} from 'react';
import InfosContext from "./InfosContext";

const ThirdPage = () => {

    const {user, gender} = useContext(InfosContext)

    return (
        <div className="d-flex justify-content-center align-items-center mt-lg-5">
            <h2 className="mt-lg-5">{gender ==='man' ? 'Monsieur ': 'Madame '}{user.firstName} {user.lastName}</h2>
        </div>
    );
}

export default ThirdPage;