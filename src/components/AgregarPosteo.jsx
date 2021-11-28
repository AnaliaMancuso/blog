import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getStorage } from "firebase/storage";
import firebaseApp from "../credenciales";

const firestore = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// let urlDescarga;

const AgregarPosteo = ({correoUsuario}) => {
  const [text, setText] = useState(['']);

  collection(firestore,"posteos");
  // let now = new Date();
  // let fullNow = now.toDateString()

  // async function fileHandler(e) {
  //   // detectar archivo
  //   const archivoLocal = e.target.files[0];
  //   // cargarlo a firebase storage
  //   const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
  //   await uploadBytes(archivoRef, archivoLocal);
  //   // obtener url de descarga
  //   urlDescarga = await getDownloadURL(archivoRef);
  // }
  async function createDoc(e) {
    e.preventDefault(e);
    await addDoc(collection(firestore, 'posteos'), {
      author: correoUsuario,
      id: + new Date(),
      text: text,
      // file: urlDescarga,
    //   date: fullNow,
    });
    e.target.descripcion.value="";
  }
    
  return (
    <div className="form-container">
      <form onSubmit={(e) => {createDoc(e);}} >
        <textarea className="text-input" type="text" name="" placeholder="Escribe..." id="descripcion" maxLength="200" onChange={(e) => setText(e.target.value)}
        />
        {/* <label className="file-upload" for="file">Subí su foto</label> */}
        {/* <input className="file-input" type="file" placeholder="Ingresa una foto" id="file" onChange={(e) => setFile(e.target.value)}/>  */}
        
        {/* <input className="file-input" type="file" placeholder="Ingresa una foto" id="file" onChange={fileHandler}/>  */}
        {/* <input type="image" src="" placeholder="Ingresa una image" alt="" id="image"/> */}
        <div className="button-send-container">
          <button className="button-send" type="submit" >Enviar!</button>
        </div>
      </form>
    </div>
  )
}

export default AgregarPosteo;