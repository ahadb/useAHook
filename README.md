# useFetch

This project has examples of React hooks that i feel could be useful. It is a work in progress project for fun - all
the hooks will work well fundamentally and you can build upon them.

## The Hooks

You can find the hooks in the src/ folder. Thus far we have:

* useFetch
* useLocalStorage


## useFetch Example Usage

* Internally in the hook we use: `useState`, `useEffect` and `useReducer`
* Props you'll need to destructure are simply: 
  * { status, data }
* Hook supports:
  * Options for params
  * Cache
  * Memoization using refs  

```javascript
import React from 'react';
import { useFetch } from './useFetch';

export function UseFetchExample() {

  const url = `https://swapi.dev/api/people/`
  const headers = new Headers();

  const options = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default',
    // body
  }

  const { status, data } = useFetch(url, options);

  const getData = () => {
    if (status === 'fetching') {
      return (
          <p>Fetching</p>
      )
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
    if (status === "error") {
      return (
          <p>Some error occurred</p>
      )
    }
  };


  return (
      <div>
        Star Wars Characters:
        {getData()}
      </div>
  );
}
```

## useLocalStorage Example Usage

* Internally in the hook we use: `useState`
* Hook supports and returns:
  * value
  * setValue
  
Both destructured in the below example:


```javascript
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export function UseLocalStorageExample() {
  const [animal, setAnimal] = useLocalStorage("animal", "Baboon");

  return (
      <div>
        <input
            type="text"
            placeholder="Enter an animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
        />
      </div>
  );
}
```
