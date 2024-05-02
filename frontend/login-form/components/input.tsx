import { Input } from '@nextui-org/input'
import React from 'react'

type InputProps = {
  type: string,
  label: string,
  placeholder?: string,
};

const TextInput = (props: InputProps) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type={props.type} label={props.label} placeholder={props.placeholder} />
    </div>
  )
}

export default TextInput