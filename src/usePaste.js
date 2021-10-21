import { useRef, useEffect } from 'react'

const COL_DELIMITER = '\t'
const ROW_DELIMITER = '\n'


function parseData(pasteInput) {
  // @todo
}


export default function usePaste(handler) {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    function handlePaste(pasteData) {
      const rows = parseData(pastedData);

      if(rows.length) {
        handlerRef.current(rows)
      }
    }

    window.addEventListener('paste', handlePaste)

    return () => window.removeEventListener('paste', handlePaste)
  }, [])

}
