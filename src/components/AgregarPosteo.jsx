import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import firebaseApp from "../credenciales";

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// let urlDescarga;

const AgregarPosteo = ({correoUsuario}) => {
  const [text, setText] = useState(['']);
  const [file, setFile] = useState(['']);

  collection(firestore,"posteos");
  let now = new Date();
  let fullNow = now.toDateString()

  async function createDoc(e) {
    e.preventDefault();
    const archivoRef = ref(storage, `documentos/${file}`);
    await uploadBytes(archivoRef, file);
    let urlDescarga = await getDownloadURL(archivoRef);

    await addDoc(collection(firestore, 'posteos'), {
      author: correoUsuario,
      id: + new Date(),
      text: text,
      file: urlDescarga,
      date: fullNow,
    });
    e.target.descripcion.value="";
  }
    
  return (
    <div className="form-container">
      <form onSubmit={createDoc} >
        <textarea className="text-input" type="text" name="" placeholder="Escribe..." id="descripcion" maxLength="200" onChange={(e) => setText(e.target.value)}
        />
        <label className="file-upload" for="file">Subí su foto</label>
        <input className="file-input" type="file" placeholder="Ingresa una foto" id="file" onChange={(e) => setFile(e.target.files[0].name)}/>
        <div className="button-send-container">
          <button className="button-send" type="submit" >Enviar!</button>
        </div>
      </form>
    </div>
  )
}

export default AgregarPosteo;