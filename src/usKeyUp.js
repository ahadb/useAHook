import { useRef, useEffect } from 'react'

/*
 * @param {function}
 */

export default function useKeyUp(handler) {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    function handleKeyUp(e) {
      handlerRef.current(e)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])
}
