import { FormFieldProps } from "../../types/types"

const FormField = ({type, placeholder, name, register, error, valueAsNumber,}: FormFieldProps) => {
 return (
    <>
       <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="error-message">{error.message}</span>}
    </>
 )
}
export default FormField