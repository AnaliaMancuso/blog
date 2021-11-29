import React from "react";
import { useState } from "react";
import firebaseApp from "../credenciales";
import ListadoPosteos from "./ListadoPosteos";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


const Logueo = ({correoUsuario}) => {
    const [estaRegistrandose, setEstaregistrandose] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();
        const correo = e.target.mail.value;
        const pass = e.target.pass.value;

        if(estaRegistrandose) {
            createUserWithEmailAndPassword(auth, correo, pass)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user + "entró por el register")
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
              });
        }else {
            signInWithEmailAndPassword(auth, correo, pass)           
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user + ' -entro por el sign in')
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
              });

        }
    }
    
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
                    <h3 className="menu-right__h2">{estaRegistrandose ? "Registrarse" : "Inicia sesión" }</h3>

                    <form className="menu-right__inicio" onSubmit={submitHandler}>
                        <input className="menu-right__inputs" type="email" name="" id="mail" placeholder="Ingrese su mail" />
                        <input className="menu-right__inputs" type="password" name="" id="pass" placeholder="Ingrese su contraseña" />
                        <button className="menu-right__inicio-button" type="submit">{estaRegistrandose ? "Ya tenés cuenta" : "Iniciar sesión"}</button>
                        <button className="menu-right__inicio-button" onClick={()=> signInWithRedirect(auth, googleProvider)} type="submit" >Ingresa con google</button>
                        <button className="menu-right__inicio-button" onClick= {()=> setEstaregistrandose(!estaRegistrandose)} > {estaRegistrandose ? "Ir a iniciar sesión" : "Registrarse" }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Logueo;