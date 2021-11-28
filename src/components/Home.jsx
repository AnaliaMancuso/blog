import React from "react";
import firebaseApp from "../credenciales";
import {getAuth, signOut} from 'firebase/auth';
import AgregarPosteo from './AgregarPosteo';
import ListadoPosteos from './ListadoPosteos';

const auth =getAuth(firebaseApp);

const Home = ({correoUsuario}) => {
    return (
        <div>
            <div className="banner">
                <h1>Masco-Blog</h1>
                <h2>Subí tu anécdota!</h2>
            </div>
            <div className="principal-container">
                <div className="listado">
                    <ListadoPosteos correoUsuario={correoUsuario}/>
                </div>
                <div className="menu-right">
                    <p>Has ingresado como {correoUsuario}</p>
                    <button className="menu-right__button" onClick={() => signOut(auth)}>Salir</button>
                    <AgregarPosteo correoUsuario={correoUsuario}/>
                </div>
            </div>
        </div>
    )
}

export default Home;