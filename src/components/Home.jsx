import React from "react";
import firebaseApp from "../credenciales";
import {getAuth, signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, setDoc, onSnapshot } from 'firebase/firestore';
import AgregarTarea from './AgregarTarea';
import ListadoPosteos from './ListadoPosteos';
import { useEffect, useState } from "react";
const auth =getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({correoUsuario}) => {

       



    //para ver un doc
    // const docuRef = doc(firestore, `posteos/${idDocumento}`);
    // const consultaDoc = await getDoc(docuRef);

    // async function verPosts() {
    //     //para ver todos los posteos
    //     const postsRef = doc(firestore, "posteos");
    //     const consultaPosts = await getDoc(postsRef);
    //     const infoPosts = consultaPosts.data();
    //     return infoPosts
    // }
    // useEffect(() => {
    //     async function listarPosteos(){
    //         const listar = await verPosts();
    //         console.log(listar)
    //     };
    // }, []);

    return (
        <div>
            <p>inicio y sesion iniciada</p>
            <p>has ingresado como {correoUsuario}</p>
            <button onClick={() => signOut(auth)}>cerrar sesion</button>
            <AgregarTarea correoUsuario={correoUsuario}/>
            

            <ListadoPosteos correoUsuario={correoUsuario}/>

        </div>
    )
}

export default Home;