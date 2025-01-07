import { FormFieldProps } from "../../types/types"
import styles from "./FormField.module.css";

const FormField = ({type, placeholder, name, register, error, valueAsNumber,}: FormFieldProps) => (
    <>
       <input
      type={type}
      placeholder={placeholder}
      className={`${styles.inputField} ${error ? styles.inputFieldError : ""}`}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className={styles.errorMessage}>{error.message}</span>}
    </>
 )

export default FormField