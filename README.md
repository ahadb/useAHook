# useFetch

This project is an example of how to use the fetch API as a generic hook.

## The Hook

* This only exposes the hook as an example, there is no build nor NPM package (gosh knows we need another one!)
  * This way you can build on top of it
* Internally in the hook we use: `useState`, `useEffect` and `useReducer`
* Props you'll need to destructure are simply: 
  * { status, data }
* Hook supports:
  * Options for params
  * Cache
  * Memoization using refs  

## Example

```javascript
import React from "react"
import './App.css';
import {useFetch} from "./useFetch";

function App() {

  const url = `https://swapi.dev/api/people/`
  const headers = new Headers();
  const options = {
    method: 'GET', // GET | POST | PUT etc
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

export default App;
```

## How You Could Extend This Hook

* Add GraphQL support, `query`, `mutate`
* Add TypeScript
* Set default url
* Destructure `fetching`, `isFetching`
* Easily add more features: `abort`, `refetch`
