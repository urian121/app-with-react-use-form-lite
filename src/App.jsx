import { useState } from 'react';
import { useForm } from 'react-use-form-lite';

export default function App() {
  const [showData, setShowData] = useState(false);

  const { formData, register, getEmptyFields } = useForm({
    nombre: '',
    edad: '',
    email: '',
    range: '',
    pais: '',
    fecha_actual: '',
    aceptaTerminos: '',
    like_react: '',
    fotoPerfil: null,
  });

  const handleSubmitForm = () => {
    setShowData(true);
    // Muestra todos los datos del formulario en consola
    console.log(formData);

    // Identifica y muestra campos vacíos
    const emptyFields = getEmptyFields();
    console.log(emptyFields);

    // Accede al archivo único si fue cargado
    if (formData.fotoPerfil) {
      console.log('Archivo perfil:', formData.fotoPerfil.name);
    }
  };

  return (
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
            <label><input type="radio" {...register('aceptaTerminos', { type: 'radio', value: 'si' })} /> Sí</label>
            <label><input type="radio" {...register('aceptaTerminos', { type: 'radio', value: 'no' })} /> No</label>
          </div>
        </div>

        <div className="form-group">
          <label>¿Te gusta React?</label>
          <label><input type="checkbox" {...register('like_react', { type: 'checkbox' })} /> Sí</label>
        </div>

        <div className="form-group">
          <label>Foto de perfil</label>
          <input type="file" {...register('fotoPerfil', { type: 'file' })} />
        </div>

        <button type="submit" onClick={handleSubmitForm}>Enviar formulario</button>
      </div>

      <div className="json-viewer">
        <pre>
          {
            showData && JSON.stringify(formData, null, 2)
          }
        </pre>
      </div>
    </div>
  )
}
