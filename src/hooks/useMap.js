import { useCallback, useState } from 'react'

export default function useMap(initialValue) {
  const [map, setMap] = useState(initialValue)

  const set = useCallback((key, value) => {
    setMap((currentMap) => ({
      ...currentMap,
      [key]: value,
    }))
  }, [])

  const has = useCallback(
    (key) => {
      return typeof map[key] !== 'undefined'
    },
    [map]
  )

  const setMultiple = useCallback((object) => {
    setMap((currentMap) => ({
      ...currentMap,
      ...object,
    }))
  }, [])

  const removeMultiple = useCallback((...keys) => {
    setMap((currentMap) => {
      const newMap = {}
      Object.keys(currentMap).forEach((key) => {
        if (!keys.includes(key)) {
          newMap[key] = currentMap[key]
        }
      })

      return newMap
    })
  }, [])

  const remove = useCallback((key) => {
    setMap((currentMap) => {
      const newMap = {}
      Object.keys(currentMap).forEach((mapKey) => {
        if (mapKey !== key) {
          newMap[mapKey] = currentMap[mapKey]
        }
      })

      return newMap
    })
  }, [])

  const removeAll = useCallback(() => {
    setMap({})
  }, [])

  const controls = {
    has,
    remove,
    removeAll,
    removeMultiple,
    set,
    setMultiple,
  }

  return [map, controls]
}
