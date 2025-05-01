import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const values = Object.fromEntries(data.entries())
    setFormData(values)
  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input name="firstName" placeholder="Nombre" />
          </div>

          <div className="form-group">
            <label htmlFor="Edad">Edad</label>
            <input name="lastName" placeholder="Edad" />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="rango">Rango</label>
            <input type="range" name="rango" placeholder="Rango" />
          </div>

          <div className="form-group">
            <label>Opción</label>
            <select name="option">
              <option value="">Seleccione un país</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input type="date" name="date"/>
          </div>

          <div className="form-group">
            <label>¿Aceptar?</label>
            <div className="radio-group">
              <label><input type="radio" name="choice" value="yes" /> Sí</label>
              <label><input type="radio" name="choice" value="no" /> No</label>
            </div>
          </div>

          <div className="form-group">
            <label>¿Confirmado?</label>
            <label><input type="checkbox" /> Sí</label>
          </div>

          <div className="form-group">
            <label>Archivo</label>
            <input type="file" />
          </div>

          <button type="submit">Enviar formulario</button>
        </form>

      <div className="json-viewer">
        <pre>{formData ? JSON.stringify(formData, null, 2) : 'Respuesta data:'}</pre>
      </div>
    </div>
  )
}
