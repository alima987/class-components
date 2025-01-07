import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string
}
export type AuthFormData = {
    email: string;
    password: string;
  };
export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };
  export type ValidFieldNames =
  | "name"
  | "email"
  | "password"
  | "confirmPassword";