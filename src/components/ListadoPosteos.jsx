import { useEffect, useState } from "react";
import { getFirestore, doc, collection, onSnapshot, deleteDoc } from 'firebase/firestore';
import firebaseApp from "../credenciales";

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
        <div className="posteos-container">
            {ladata.map((dato)=> (
                <div key={dato.id} className="posteo-card">
                    <div className="card-top">
                        <div className="card-text">
                            <p> {dato.text}</p>
                            <h3>{dato.author} </h3>
                        </div>
                        <div className="img-placeholder">
                            <img src={dato.file} />
                            <p>{dato.file} </p>

                        </div>
                    </div>
                    <div className="button-delete">
                        {correoUsuario ===  dato.author ? (
                            <button onClick={() => { borrarPosteo(dato.id)}}>
                            x 
                            </button>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ListadoPosteos;