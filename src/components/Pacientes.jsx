import React from 'react'
import { Formulario } from './Formulario'

export const Pacientes = () => {
  return (
    <>
    <div className="md:w-1/2 lg:w-2/5 mx-5">
             {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-100 ">
    <div>
        <h3 className="text-gray-700 ">Pacientes Agregados</h3>
        <ul>
            {PetList.map((petList, index) => (
                <li key={index} className="bg-white ">
                    <p className="text-black">Nombre Mascota: {paciente.nombreMascota}</p>
                    <p className="text-black">Nombre Propietario: {paciente.nombrePropietario}</p>
                    <p className="text-black">Email: {paciente.email}</p>
                    <p className="text-black">Fecha: {paciente.fecha}</p>
                    <p className="text-black">Síntomas: {paciente.sintomas}</p>
                </li>
            ))}
        </ul>
    </div>
</form>

    </div>
    </>
  )
}
