import React from "react";
import Banner from "./Banner";
import Profile from "./Profile";
import firebaseApp from "../credenciales";
import {getAuth} from 'firebase/auth';
import ListadoPosteos from './ListadoPosteos';

const Home = ({correoUsuario}) => {
    return (
        <div>
            <Banner/>
            <div className="principal-container">
                <div className="listado">
                    <ListadoPosteos correoUsuario={correoUsuario}/>
                </div>
                <div className="menu-right">
                    <Profile correoUsuario={correoUsuario} />
                </div>
            </div>
        </div>
    )
}

export default Home;