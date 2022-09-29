import { useFormik } from 'formik'
import * as yup from 'yup';


const Askme = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", area: "" },
    validationSchema: yup.object({
      name: yup.string()
        .required("*El Nombre es obligatorio")
        .max(25, "*El Maximo es de 20 Caracteres"),
      email: yup.string()
        .required("*El Email es obligatorio")
        .email("*El formato del Email es incorrecto"),
      area: yup.string()
        .required("*El campo Pregunta es obligatorio")
    }),
    onSubmit: values => {
      console.log(values);
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div>
          <label>Nombre:</label><br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          /><br />
          {formik.errors.name && <div id="error">{formik.errors.name}</div>}

          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          {formik.errors.email && <div id="error">{formik.errors.email}</div>}
          <label>Preguntame</label><br />
          <textarea
            type="textarea"
            name="area"
            id="area"
            onChange={formik.handleChange}
            value={formik.values.area}
          />
          {formik.errors.area && <div id="error">{formik.errors.area}</div>}
        </div>
        <input type="submit" value="submit" id="but" />
      </form>
    </div>
  )
}

export default Askme;