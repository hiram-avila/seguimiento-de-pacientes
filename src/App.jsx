import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"

function App() {

    const [pacientes, setPacientes] = useState([])

     
     //manejador de eliminación
     const handleDelete = (id) => {
      const newPacientes = pacientes.filter(paciente => paciente.random !== id)
      setPacientes(newPacientes)
    
  }
  

  return (

    
    <div className="container md-auto mt-20 shadow-2xl">
        <Header />
        
        <div className="mt-12 flex ">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
            />

            <ListadoPacientes 
              pacientes={pacientes}
              setPacientes={setPacientes}
              handleDelete={handleDelete}

            />
        </div>

    </div>
  )
}

export default App
