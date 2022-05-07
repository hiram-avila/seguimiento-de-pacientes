import React from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes, handleDelete }) => {


// console.log(pacientes.length)

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>

      
        { (pacientes.length > 0) ? ( 
            <>
                <h2 className='font-black text-3xl text-center mb-3'>Lista</h2>

                <p className='text-center text-xl mt-5 mb-10'>
                    Administra tus {''}
                    <span className='text-indigo-600 font-bold'>pacientes y citas</span>
                </p>

                
                {pacientes.map(nombre => (
                    <Paciente
                        key={ nombre.random }
                        {...nombre}
                        handleDelete={handleDelete}
        
                    />
                ))}
            </>

           ) :(
            <>
                 <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                Administra {' '}
                <span className="text-indigo-600 font-bold">Aqui tus pacientes</span>
                </p>
            </>
           )}
        </div>
  )
        }

  
export default ListadoPacientes
 

  
