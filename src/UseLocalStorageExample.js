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
