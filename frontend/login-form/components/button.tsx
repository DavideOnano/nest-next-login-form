import { Button } from '@nextui-org/button'
import React, { useCallback } from 'react'

type ButtonProps = {
  color: "primary" | "secondary" | "default" | "success" | "warning" | "danger",
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost",
  className?: string
  onPress?: () => void
}

const ButtonCmp = (props: ButtonProps) => {
  return (
    <Button onPress={props.onPress} className={props.className} variant={props.variant} color={props.color}>
      Button
    </Button>
  )
}

export default ButtonCmp