import { useRef, useEffect } from 'react'

/*
 * @param {function}
 */

export default function useKeyDown(handler) {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    function handleKeyDown(e) {
      handlerRef.current(e)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keyup', handleKeyDown)
  }, [])
}
