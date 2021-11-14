import { useRef, useEffect } from 'react'

const COL_DELIMITER = '\t'
const ROW_DELIMITER = '\n'

function parseData(pasteInput) {
  // @todo
}

/*
 * React hook to paste rows into div container
 */

export default function usePaste(handler) {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    function handlePaste(pastedData) {
      const rows = parseData(pastedData)

      if (rows.length) {
        handlerRef.current(rows)
      }
    }

    window.addEventListener('paste', handlePaste)

    return () => window.removeEventListener('paste', handlePaste)
  }, [])
}
