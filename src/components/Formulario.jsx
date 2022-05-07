import React, { useState } from 'react'
import { Error } from './Error'

 

export const Formulario = ({ pacientes, setPacientes }) => {


        const [nombre, setNombre] = useState('')
        const [propietario, setPropietario] = useState('')
        const [email, setEmail] = useState('')
        const [fecha, setFecha] = useState('')
        const [sintomas, setSintomas] = useState('')

        const [error, setError] = useState(false);

        
        const random = Date.now();
    

        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            random
        }


    const handleSubmit = (e) => {  
        e.preventDefault();
        // Validación del Formulario
            if( [ nombre, propietario, email, fecha, sintomas ].includes ('') ) {
            console.log('Hay Al Menos un campo vaçio')
            setError(true);       
            // console.log(pacientes)

            return 
            }
                
        setError(false);
        setPacientes([ ...pacientes, objetoPacientes ]);
        //resetear el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }


  return (
      
    <div className=' md:w-1/2 lg:w-2/5 '>
        <h2 className='font-black text-3xl text-center'>Seguimiento pacientes </h2>

        <p className='text-lg mt-5 text-center mb-10'>
            Añade pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>


            <form  onSubmit={ handleSubmit } 
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 ml-7'
                >

                    { error && <Error />}
                    

                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase'>Nombre Mascota</label>

                    <input 
                        id='mascota'
                        type='text'
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                        autoComplete='off'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}    
                    />
                </div>


                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase'>Nombre Propietario</label>

                    <input 
                        id='propietario'
                        type='text'
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    
                    />
                </div>


                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase'>Email</label>

                    <input 
                        id='email'
                        type='email'
                        placeholder='Email'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    
                    />
                </div>


                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase'>Fecha</label>

                    <input 
                        id='alta'
                        type='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>


                <div className='mt-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase'>Sintomas</label>
                    <textarea 
                        maxLength={160}
                        id='sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los sintomas'
                        value= {sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type='submit'
                    value='añadir paciente'
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all mt-4'
                />
             </form>

    </div>
  )
}
