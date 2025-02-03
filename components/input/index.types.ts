import { UseFormRegister, FieldValues, FieldError, Path ,FieldPath} from "react-hook-form";
import React from "react";

export interface InputProps<IFormValues extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
    name: Path<IFormValues>;
  label?: string;
  placeholder?: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  customClassName?: string;
  labelCustomClassName?: string;
  isSearchIcon?: boolean;
  hideErrorMsg?: boolean;
  bgcolor?: string;
  validationPattern?: RegExp;
  message?: string;
  maindiv?: string;
  required?: boolean;
  register?: UseFormRegister<IFormValues>; // Use `UseFormRegister` from react-hook-form
  passwordWay?: boolean;
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  errorMsg?: string | FieldError | undefined; // Add error message type
}