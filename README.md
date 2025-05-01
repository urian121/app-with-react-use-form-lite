# Proyecto React - Formulario con `react-use-form-lite`

Este proyecto es un ejemplo básico de una aplicación React que implementa un formulario utilizando el hook `react-use-form-lite`. Permite gestionar campos de entrada de manera sencilla, detectar campos vacíos, mostrar los datos enviados y visualizar archivos cargados.

## Características

- Manejo de múltiples tipos de input (`text`, `number`, `email`, `range`, `select`, `radio`, `checkbox`, `file`).
- Detección de campos vacíos con `getEmptyFields()`.
- Vista previa de los datos del formulario en formato JSON.
- Carga de archivos y ejemplo para manejo de múltiples archivos.
- Simulación de envío de datos con spinner.
- Botón de limpieza del formulario con `resetForm()`.

## Instalación

1. Clona el repositorio o copia el proyecto.
2. Instala las dependencias:

```bash
npm install react-use-form-lite react-json-pretty
```

## Uso

```tsx
import { useForm } from 'react-use-form-lite';
```

Inicializa el formulario con un objeto base:

```tsx
const camposForm = {
  nombre: '',
  edad: '',
  email: '',
  range: '',
  pais: '',
  fecha_actual: '',
  aceptaTerminos: '',
  teGustaReact: '',
  fotoPerfil: null,
}
```

Registra los campos:

```tsx
<input type="text" {...register('nombre')} />
```

Manejo del envío:

```tsx
const handleSubmitForm = () => {
  console.log('Datos:', formData);
  console.log('Campos vacíos:', getEmptyFields());
};
```

## Archivos múltiples

Para inputs con `multiple`, como:

```tsx
<input type="file" {...register('multipleDocumentos', { type: 'file' })} multiple />
```

Declara el campo `multipleDocumentos` en `camposForm`. Puedes recorrer los archivos con:

```tsx
formData.multipleDocumentos.forEach((file) => console.log(file.name));
```

## Dependencias

- [react-use-form-lite](https://www.npmjs.com/package/react-use-form-lite)
- [react-json-pretty](https://www.npmjs.com/package/react-json-pretty)

---

© 2025 - Ejemplo de formulario en React.