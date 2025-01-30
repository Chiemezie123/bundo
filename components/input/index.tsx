import React from "react";

import {cn} from "@/utils/helpers";
import {
  FieldValues,
  UseFormRegisterReturn,
  InternalFieldName,
} from "react-hook-form";

import { InputProps } from "./index.types";
import { Typography } from "../typography";

const InputComponent = <FV extends FieldValues>(
  props: InputProps<FV>,

) => {
  const {
    placeholder,
    errorMsg,
    successMsg,
    label,
    name,
    icon1,
    icon2,
    customClassName,
    labelCustomClassName,
    isSearchIcon,
    hideErrorMsg,
    bgcolor,
    validationPattern,
    message,
    maindiv,
    required,
    register,
    passwordWay,
    passwordFunc,
    inputHandler,
    inputValue,
    onBlur,
    ...rest
  } = props;



  const validation = {
    required: required || false,
    pattern: validationPattern ? { value: validationPattern as RegExp, message: message || 'Invalid input' } : undefined,
  };

 const registerInput = register ? register(name, validation) : undefined;
    const inputType = passwordWay ? "password" : "text";
  return (
    <div className={cn(`relative w-full z-0 flex flex-col `, maindiv)}>
      {label && (
        <label
          className={cn(
            "mb-1 w-fit first-letter:capitalize",
            errorMsg ? "text-error" : "",
            labelCustomClassName
          )}
          htmlFor={name}
        >
          <Typography variant="c-l" font="sans" fontWeight="regular" className="leading-normal" color="mine-shaft-950">{label}</Typography>
        </label>
      )}
      <div
        className={cn(
          `relative w-full  rounded-[5px] border focus-within:border-[#34A853] focus-within:border-[2px] h-[42px]`,
          label ? "px-0 " : "",
          customClassName,
          bgcolor 
        )}
      >
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2  ">
          {icon1 && <div className="fill-current w-[18px] h-[18px]">{icon1}</div>}
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" >
          {icon2 && <div className=" w-[18px] h-[18px]" onClick={passwordFunc}>{icon2}</div>}
        </div>
        <input
          className={cn(
            `peer block w-full appearance-none rounded-md h-full ${icon1 ? "px-8":"px-[10px]"} text-c-l font-medium placeholder:font-regular placeholder:text-p-m autofill:none focus:outline-none`,
            bgcolor,
            rest.disabled
              ? "disabled:cursor-not-allowed disabled:bg-primary-light-100 disabled:font-semibold  disabled:text-gray-3"
              : "",
           
          )}
          id={name}
          placeholder={placeholder}
          type={inputType}
          {...registerInput}
        />
      </div>
    </div>
  );
};

export type InputComponentType = <
  FV extends FieldValues,
  TFieldName extends InternalFieldName
>(
  props: InputProps<FV> & {
    ref?:
      | React.ForwardedRef<HTMLInputElement>
      | UseFormRegisterReturn<TFieldName>;
  }
) => ReturnType<typeof InputComponent>;

const Input = React.forwardRef(InputComponent) as InputComponentType;

export { Input };
export * from "./index.types";
