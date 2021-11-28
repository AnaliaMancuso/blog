import React from "react";
import { useState } from "react";
import firebaseApp from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


const Logueo = () => {
    const [estaRegistrandose, setEstaregistrandose] = useState(false);
    // const [hasError, setError] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();
        const correo = e.target.mail.value;
        const pass = e.target.pass.value;
        // try {
            if(estaRegistrandose) {
                createUserWithEmailAndPassword(auth, correo, pass);
                console.log("entró por el register")
            }else {
                signInWithEmailAndPassword(auth, correo, pass);
                console.log('entro por el sign in')
            }
        // }catch(error) {
        //     setError(true);
        // }
        // if (hasError) {
        //     alert('error');
        // }
    }
    
    return (
        <div>
            <h2>{estaRegistrandose ? "Registrarse" : "Inicia sesión" }</h2>

            <form onSubmit={submitHandler}>
                <h4>ingrese su mail</h4>
                <input type="email" name="" id="mail" />
                <h4>ingrese contraseña</h4>
                <input type="password" name="" id="pass" />
                
            <button variant="dark" type="submit">{estaRegistrandose ? "Regístrate" : "inicia sesión"}</button>
            <button onClick={()=> signInWithRedirect(auth, googleProvider)} type="submit" >ingresa con google</button>
            <button onClick= {()=> setEstaregistrandose(!estaRegistrandose)} > {estaRegistrandose ? "Ya tengo cuenta" : "Registrarse" }</button>
            </form>
        </div>
    )
}

export default Logueo;