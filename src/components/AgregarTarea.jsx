import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from "../credenciales";

const firestore = getFirestore(firebaseApp);

const AgregarTarea = ({correoUsuario}) => {
    const [text, setText] = useState(['']);
    const [title, setTitle] = useState(['']);
    const [file, setFile] = useState(['']);

    collection(firestore,"posteos");
    // let now = new Date();
    // let fullNow = now.toDateString()
    
    async function createDoc(e) {
        e.preventDefault(e);
        await addDoc(collection(firestore, 'posteos'), {
          author: correoUsuario,
          id: + new Date(),
          title: title,
          text: text,
          file: file,
        //   date: fullNow,
        });
      
      e.target.title.value="";
      e.target.descripcion.value="";
    }
    return (
        <div>

            agregar tarea
            <form onSubmit={(e) => {
            createDoc(e);
          }} >

                <input type="text" name="" placeholder="Ingresa el titulo" id="title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="" placeholder="Ingresa anécdota" id="descripcion" onChange={(e) => setText(e.target.value)}
                />
                <input type="file" placeholder="Ingresa una foto" id="file" onChange={(e) => setFile(e.target.value)}/> 
                {/* <input type="image" src="" placeholder="Ingresa una image" alt="" id="image"/> */}

                <button type="submit" >agregar anecdota</button>
            </form>

        </div>
    )
}

export default AgregarTarea;