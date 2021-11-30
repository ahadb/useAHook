import { useCallback, useEffect, useState } from 'react'

export default function useRowData(arr, id) {
  const [rowData, setRowData] = useState(arr)

  const getRowdata = () => {
    const rowData = arr.find((x) => x.id === id)
    setRowData(rowData)
  }

  useEffect(() => {
    getRowdata()
  }, [])

  return rowData
}
