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
    range: '20',
    pais: '',
    fecha_actual: '',
    aceptaTerminos: true,
    tecnologias: [],
    fotoPerfil: null,
    multipleDocumentos: [],
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

      // Verificar si el archivo fue cargado
      if (formData.fotoPerfil) {
        console.log('Archivo perfil:', formData.fotoPerfil.name);
      }

      // Verificar si hay archivos cargados
      if (formData.multipleDocumentos.length > 0) {
        formData.multipleDocumentos.forEach((file) => console.log(`Archivos cargados: ${file.name}`));
      }

    }, 500);

  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <h1>App with <code>react-use-form-lite</code></h1>
        <div className="row">
          <div className="col-md-6 form-container">
            <div className="row">
              <div className="col-md-8 mb-3">
                <div className="mb-0">
                  <label htmlFor="nombre">Nombre</label>
                  <input type='text' className='form-control' {...register('nombre')} />
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="mb-0">
                  <label htmlFor="Edad">Edad</label>
                  <input type='number' className='form-control' {...register('edad')} />
                </div>
              </div>
            </div>

            <div className="mb-0">
              <label htmlFor="Email">Email</label>
              <input type="email" className='form-control' {...register('email')} />
            </div>
            <div className="row">
              <div className="col-md-8 mb-3">
                <label>País</label>
                <select name="pais" className="form-select" {...register('pais', { type: 'select' })}>
                  <option value="">Seleccione un país</option>
                  <option value="Colombia">Colombia</option>
                  <option value="México">México</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="fecha">Fecha actual</label>
                <input type="date" className="form-control" {...register('fecha_actual')} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="mb-0">
                  <label htmlFor="range">Rango</label>
                  <input type="range" className="form-range" {...register('range')} />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="mb-3">
                  <label className="form-label">¿Aceptar términos?</label>
                  <div className="radio-group d-flex gap-3">
                    <label className="form-check-label d-flex align-items-center gap-1">
                      <input type="radio" {...register('aceptaTerminos', { type: 'radio', value: 'Sí' })} className="form-check-input" />
                      Sí
                    </label>
                    <label className="form-check-label d-flex align-items-center gap-1">
                      <input type="radio" {...register('aceptaTerminos', { type: 'radio', value: 'No' })} className="form-check-input" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">¿Dominas estas tecnologías?</label>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="js"
                  {...register('tecnologias', { type: 'checkbox', value: 'JavaScript' })}
                />
                <label className="form-check-label" htmlFor="js">JavaScript</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="react"
                  {...register('tecnologias', { type: 'checkbox', value: 'React' })}
                />
                <label className="form-check-label" htmlFor="react">React</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="ts"
                  {...register('tecnologias', { type: 'checkbox', value: 'TypeScript' })}
                />
                <label className="form-check-label" htmlFor="ts">TypeScript</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="django"
                  {...register('tecnologias', { type: 'checkbox', value: 'Python + Django' })}
                />
                <label className="form-check-label" htmlFor="django">Python + Django</label>
              </div>
            </div>

            <div className="mb-3">
              <label>Foto de perfil</label>
              <input type="file" className="form-control form-control-sm" accept="image/*" {...register('fotoPerfil', { type: 'file' })} />
            </div>

            <div className="mb-0">
              <label>Archivos</label>
              <input type="file" className="form-control form-control-sm" {...register('multipleDocumentos', { type: 'file' })} multiple />
            </div>

            <div className="d-flex justify-content-center gap-2 mt-3">
              <button type="submit" onClick={handleSubmitForm} className="btn btn-primary">
                Enviar formulario
              </button>
              <button type="button" onClick={resetForm} className="btn btn-secondary">
                Limpiar formulario
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="json-viewer h-100">
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
                      multipleDocumentos: formData.multipleDocumentos.length > 0
                        ? formData.multipleDocumentos.map((file) => ({
                          name: file.name,
                          size: file.size,
                          type: file.type,
                        }))
                        : [],
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
        </div>
      </div>
    </>
  )
}
