import React, { useState } from 'react'

export const Paciente = ({ nombre,propietario,email,fecha,sintomas, random, handleDelete } ) => {

    // const [pacientess, setPac] = useState('')

        const handledelete = (  ) => {
            handleDelete(random)
            alert('vas a eliminar al paciente ' + nombre)
        }

    return (
        <div className='mx-5 my-10 bg-white  px-5 py-10 rounded-xl'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>nombre:
                <span className='font-normal normal-case '>{ nombre }</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>propietario:
                <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>email:
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>fecha:
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>sintoma:
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>


            <div className='flex justify-between mt-10' >
                <button 
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:indigo-700 text-white font-bold uppercase rounded-lg'
                >
                    Editar
                </button>

                <button 
                    type='button'
                    className='py-2 px-10 bg-red-800 hover:indigo-700 text-white font-bold uppercase rounded-ld'
                    onClick={handledelete}
                >
                    Eliminar
                </button>

            </div>

        </div>
    )
}
