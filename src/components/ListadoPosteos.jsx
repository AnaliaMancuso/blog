import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, collection, setDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import firebaseApp from "../credenciales";
import {getAuth, signOut} from 'firebase/auth';
import { remove } from "dom-helpers";

const auth =getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const ListadoPosteos = ( {correoUsuario}) => {
    const [ladata, setlaData] = useState([])
                //para leer la data de la db
    useEffect(()=> {
        onSnapshot(collection(firestore, "posteos"), (snapshot)=> {
        setlaData(snapshot.docs.map(doc=>doc.data()))
        });

    },[]);

    async function borrarPosteo(idPosteo) {
    //     const docuRef = doc(firestore, "posteos", idPosteo);
    //     const busqueda = await getDoc(docuRef);
    //     await deleteDoc(docuRef);
    // };
        const docRef = doc(firestore, "posteos", idPosteo);
        await deleteDoc(docRef);
    // const borrar = await firestore.collection("posteos").doc(idPosteo).delete();
    }
    return (
        <div>
            {ladata.map((dato)=> (
                <div key={dato.id}>
                    <h3>el nombre es {dato.author} </h3>
                    <h3>titulo:  {dato.title}</h3>
                    <p>anecdota: {dato.text}</p>
                    <img src={dato.file} />
                    {/* <p>fecha: {dato.date}</p> */}
                
            
                    <button>ver archivo</button>


                    {correoUsuario ==  dato.author ? (
                  <button onClick={() => { borrarPosteo(dato.id)}}>eliminar </button>
                ) : null}
                    
                </div>
            ))}
        </div>
    )
}
export default ListadoPosteos;