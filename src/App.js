import React, { useState} from 'react';
import  './App.css';
import Home from './components/Home';
import Logueo from './components/Logueo';
import firebaseApp from './credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(firebaseApp);

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  // cambios de usuario
  onAuthStateChanged(auth,(usuarioFirebase)=> {
    if(usuarioFirebase) {
      setUsuarioGlobal(usuarioFirebase)
    }else {
      setUsuarioGlobal(null)
    }
  })

  return (
    <>
    {usuarioGlobal ? <Home correoUsuario={usuarioGlobal.email} /> : <Logueo/>}
    </>
  );
}

export default App;
