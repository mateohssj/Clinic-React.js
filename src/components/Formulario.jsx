import { useState } from 'react';

export const Formulario = () => {
    
    const [PetList, setPetList] = useState({
        nombreMascota: "",
        nombrePropietario: "",
        alta: "",
        email: "",
        sintomas: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetList((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(PetList);
    } 

    const { nombreMascota, nombrePropietario, email, alta, sintomas } = PetList
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            {/* formulario */}
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="Mascota"
                        type="text"
                        name="nombreMascota"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={handleChange}
                    />  
                    <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="Propietario"
                        type="text"
                        name="nombrePropietario"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={handleChange}
                    />
                    <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={email}
                        onChange={handleChange}
                    />
                    <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="Alta"
                        type="date"
                        name="alta"
                        placeholder="Alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={alta}
                        onChange={handleChange}
                    />
                    <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="Sintomas"
                        type="textarea"
                        name="sintomas"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                       value={sintomas}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />
            </form>
        </div>
    );
  };


  