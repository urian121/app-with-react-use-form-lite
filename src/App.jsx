import { useState } from 'react';
import { useFormLite } from 'react-use-form-lite';

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

import './assets/css/spinner.css';

export default function App() {
  const [showData, setShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Definir un objeto con los campos del formulario
  const camposForm = {
    nombre: '',
    edad: '',
    email: '',
    range: '',
    pais: '',
    fecha_actual: '',
    aceptaTerminos: true,
    teGustaReact: false,
    fotoPerfil: null,
  }

  // Destructuring de useFormLite y sus propiedades
  const { formData, register, resetForm, getEmptyFields } = useFormLite(camposForm);

  const handleSubmitForm = () => {
    setIsLoading(true);
    setShowData(false);

    // Simulación de envio de formulario
    setTimeout(() => {
      setShowData(true);
      setIsLoading(false);

      // Mostrar datos y campos vacíos
      console.log('Datos del formulario:', formData);
      console.log('Campos vacíos:', getEmptyFields());

      // verificar si el archivo fue cargado
      if (formData.fotoPerfil) {
        console.log('Archivo perfil:', formData.fotoPerfil.name);
      }

      /**
       * Para inputs con `multiple`, como:
       * <input type="file" {...register('multipleDocumentos', { type: 'file' })} multiple />
       * asegúrate de declarar `multipleDocumentos` en `camposForm`.
       * Puedes recorrer los archivos con:
       * formData.multipleDocumentos.forEach((file) => console.log(`Archivos cargados: ${file.name}`));
      */

    }, 500);

  };

  return (
    <>
      <h1>App with <code>react-use-form-lite</code></h1>
      <div className="container">
        <div className="form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type='text' {...register('nombre')} />
          </div>

          <div className="form-group">
            <label htmlFor="Edad">Edad</label>
            <input type='number' {...register('edad')} />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" {...register('email')} />
          </div>

          <div className="form-group">
            <label htmlFor="range">Rango</label>
            <input type="range" {...register('range')} />
          </div>

          <div className="form-group">
            <label>País</label>
            <select name="pais" {...register('pais', { type: 'select' })}>
              <option value="">Seleccione un país</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha actual</label>
            <input type="date" {...register('fecha_actual')} />
          </div>

          <div className="form-group">
            <label>¿Aceptar términos?</label>
            <div className="radio-group">
              <label><input type="radio" {...register('aceptaTerminos', { type: 'radio', value: 'Sí' })} /> Sí</label>
              <label><input type="radio" {...register('aceptaTerminos', { type: 'radio', value: 'No' })} /> No</label>
            </div>
          </div>

          <div className="form-group">
            <label>¿Te gusta React?</label>
            <label><input type="checkbox" {...register('teGustaReact', { type: 'checkbox' })} /> Sí</label>
          </div>

          <div className="form-group">
            <label>Foto de perfil</label>
            <input type="file" {...register('fotoPerfil', { type: 'file' })} />
          </div>

          <button type="submit" onClick={handleSubmitForm}>Enviar formulario</button>
          <button type="button" onClick={resetForm}>Limpiar formulario</button>
        </div>

        <div className="json-viewer">
          {isLoading && <div className="spinner"></div>}

          {showData && !isLoading && (
            <div>
              <JSONPretty
                data={{
                  ...formData,
                  fotoPerfil: formData.fotoPerfil
                    ? {
                      name: formData.fotoPerfil.name,
                      size: formData.fotoPerfil.size,
                      type: formData.fotoPerfil.type,
                    }
                    : null,
                }}
              />

              {/* Mostrar campos vacíos debajo */}
              {Object.entries(getEmptyFields()).length > 0 && (
                <div>
                  <h4>Campos vacíos:</h4>
                  <JSONPretty data={getEmptyFields()} />
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  )
}
