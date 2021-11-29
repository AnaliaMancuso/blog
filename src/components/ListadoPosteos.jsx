import { useEffect, useState } from "react";
import { getFirestore, collection, doc, deleteDoc, getDocs } from 'firebase/firestore';
import firebaseApp from "../credenciales";

const firestore = getFirestore(firebaseApp);

const ListadoPosteos = ( {correoUsuario}) => {
    const [ladata, setlaData] = useState([])
    //para leer la data de la db

 async function getPosteos() {
    const test = []
    const querySnapshot = await getDocs(collection(firestore,"posteos"))
    querySnapshot.forEach((doc) =>{
        test.push({
            id: doc.id,
            author: doc.data().author,
            text: doc.data().text,
            file: doc.data().file,
        })
    })
    setlaData(test)
 }


 useEffect(() => {
    getPosteos()
 }, [])
    
    async function borrarPosteo(idPosteo) {
       console.log(idPosteo)        
        await deleteDoc(doc(firestore, "posteos", idPosteo)).then(console.log("posteo borrado"))
}
    return (
        <div className="posteos-container">
            {ladata.map((dato)=> (
                <div key={dato.id} className="posteo-card">
                    <div className="card-top">
                        <div className="card-text">
                            <p> {dato.text}</p>
                            <h3>{dato.author} - {dato.date}  </h3>
                            <h4>{dato.date}</h4>
                        </div>
                        <div className="img-placeholder">
                            <img src={dato.file} alt="imagen"/>
                        </div>
                    </div>
                    <div className="button-delete">
                        {correoUsuario ===  dato.author || correoUsuario === "admin@admin.com" ? (
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