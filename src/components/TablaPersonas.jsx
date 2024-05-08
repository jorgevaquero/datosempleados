import React from 'react';

const TablaPersonas = ({ datos, mostrarMensaje }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h1 className="text-3xl font-bold mb-4">Tabla de Personas</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-2">Nombres</th>
              <th className="px-2 py-2">Apellidos</th>
              <th className="px-2 py-2">Dirección</th>
              <th className="px-2 py-2">Edad</th>
              <th className="px-2 py-2">Profesión</th>
              <th className="px-2 py-2">Estado Civil</th>
              <th className="px-2 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((persona, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-2">{persona.nombre}</td>
                <td className="px-2 py-2">{persona.apellido}</td>
                <td className="px-2 py-2">{persona.direccion}</td>
                <td className="px-2 py-2">{persona.edad}</td>
                <td className="px-2 py-2">{persona.profesion}</td>
                <td className="px-2 py-2">{persona.estadocivil}</td>
                <td className="px-2 py-2">
                  <button
                    onClick={() => mostrarMensaje(parseInt(persona.edad))}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Mostrar mensaje
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaPersonas;