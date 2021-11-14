import { useState } from 'react'

export const useLocalStorage = (k, initialVal) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(k)
      return item ? JSON.parse(item) : initialVal
    } catch (error) {
      console.log(error)
      return initialVal
    }
  })

  const setValue = (val) => {
    try {
      const valueToStore = val instanceof Function ? val(storedValue) : val
      setStoredValue(valueToStore)
      window.localStorage.setItem(k, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
