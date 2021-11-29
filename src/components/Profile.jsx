import React from "react";
import {getAuth, signOut} from 'firebase/auth';
import AgregarPosteo from './AgregarPosteo';
import firebaseApp from "../credenciales";


const auth =getAuth(firebaseApp);


const Profile = ({correoUsuario}) => {
    return (
        <>
            <p>Has ingresado como {correoUsuario}</p>
            <button className="menu-right__button" onClick={() => signOut(auth)}>Salir</button>
            <AgregarPosteo correoUsuario={correoUsuario}/>
        </>
    )
}

export default Profile;