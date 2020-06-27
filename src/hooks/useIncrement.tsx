import { useState } from "react"

const useIncrement = (
  initial: number,
  step = 1,
  lowerLimit = 0,
  upperLimit = 100
) => {
  const [value, setValue] = useState(initial)
  const increment = () =>
    setValue(prev => (prev >= upperLimit ? upperLimit : prev + step))
  const decrement = () =>
    setValue(prev => (prev <= lowerLimit ? lowerLimit : prev - step))
  return [
    value,
    setValue,
    {
      increment,
      decrement,
    },
  ]
}

export default useIncrement
