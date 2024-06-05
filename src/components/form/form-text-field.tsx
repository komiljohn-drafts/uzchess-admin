import React from "react"
import { Controller, useFormContext } from "react-hook-form"

import { Input } from "../ui/input"

interface FormTextFieldProps {
  label?: string
  name: string
  placeholder?: string
}

const FormTextField = React.forwardRef<HTMLInputElement, FormTextFieldProps>(
  ({ name, ...props }, ref) => {
    const { control } = useFormContext()

    return (
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <Input error={error?.message} {...field} ref={ref} {...props} />
        )}
      />
    )
  }
)

export default FormTextField
