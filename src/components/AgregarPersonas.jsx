import React, { useState } from 'react';

const AgregarPersona = ({ handleSubmit, handleInputChange, nuevaPersona, setModalAgregarAbierto }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="relative bg-white rounded-lg overflow-hidden w-3/4">
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Agregar Persona</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombres
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={nuevaPersona.nombre}
                  onChange={handleInputChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  value={nuevaPersona.apellido}
                  onChange={handleInputChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  value={nuevaPersona.direccion}
                  onChange={handleInputChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
                  Edad
                </label>
                <input
                  type="text"
                  name="edad"
                  id="edad"
                  value={nuevaPersona.edad}
                  onChange={handleInputChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="profesion" className="block text-sm font-medium text-gray-700">
                  Profesión
                </label>
                <input
                  type="text"
                  name="profesion"
                  id="profesion"
                  value={nuevaPersona.profesion}
                  onChange={handleInputChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="estadocivil" className="block text-sm font-medium text-gray-700">
                  Estado Civil
                </label>
                <input
                  type="text"
                  name="estadocivil"
                  id="estadocivil"
                  value={nuevaPersona.estadocivil}
                  onChange={handleInputChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setModalAgregarAbierto(false)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cerrar
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarPersona;
