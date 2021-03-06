import React from 'react'
import { useFetch } from './useFetch'

export function UseFetchExample() {
  const url = `https://swapi.dev/api/people/`
  const headers = new Headers()

  const options = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default',
    // body
  }

  const { status, data } = useFetch(url, options)

  const getData = () => {
    if (status === 'fetching') {
      return <p>Fetching</p>
    }

    if (status === 'fetched') {
      return (
        <div>
          {data.results.map((x, i) => (
            <div key={i}>{x.name}</div>
          ))}
        </div>
      )
    }
    if (status === 'error') {
      return <p>Some error occurred</p>
    }
  }

  return (
    <div>
      Star Wars Characters:
      {getData()}
    </div>
  )
}
