import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgregarPersona from '../components/AgregarPersonas';
import TablaPersonas from '../components/TablaPersonas';

const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const [modalAgregarAbierto, setModalAgregarAbierto] = useState(false);
  const [modalMensaje, setModalMensaje] = useState('');
  const [datosCargados, setDatosCargados] = useState(false); 

  const [nuevaPersona, setNuevaPersona] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    edad: '',
    profesion: '',
    estadocivil: ''
  });

  useEffect(() => {
    if (datosCargados) {
      cargarDatos(); // Cargar datos al inicio
    }
  }, [datosCargados]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaPersona((prevPersona) => ({
      ...prevPersona,
      [name]: value
    }));
  };

  const mostrarMensaje = (edad) => {
    let mensaje = '';
    if ( edad >= 18 && edad <= 24) {
      mensaje = 'Fuera de peligro';
    } else if (edad >= 26 && edad <= 50) {
      mensaje = 'Tenga cuidado, tome todas las medidas de prevención';
    } else if (edad >= 51) {
      mensaje = 'Por favor quédese en casa';
    }
    setModalMensaje(mensaje);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Enviar los datos a la base de datos
      await axios.post('http://localhost:3000/empleados', nuevaPersona);
      
      
      // Cerrar el modal y limpiar el formulario
      setModalAgregarAbierto(false);
      setNuevaPersona({
        nombre: '',
        apellido: '',
        direccion: '',
        edad: '',
        profesion: '',
        estadocivil: ''
      });
    } catch (error) {
      console.error('Error al agregar persona:', error);
    }
  };

  const cargarDatos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/empleados');
      setDatos(response.data);
      setDatosCargados(true); 
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <button
        onClick={() => setModalAgregarAbierto(true)}
        className="mt-5 me-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Persona
      </button>

      <button
        onClick={() => cargarDatos()}
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Cargar Datos
      </button>

      <TablaPersonas datos={datos} mostrarMensaje={mostrarMensaje} />

      {modalAgregarAbierto && (
        <AgregarPersona
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          nuevaPersona={nuevaPersona}
          setModalAgregarAbierto={setModalAgregarAbierto}
        />
      )}

      {modalMensaje && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="relative bg-white rounded-lg overflow-hidden w-96">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Mensaje</h3>
              <p className="text-sm text-gray-500">{modalMensaje}</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setModalMensaje('')}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
