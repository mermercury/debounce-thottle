import React from 'react';
import debounce from '../utils/debounce';

export default function Counter() {
  const [debounceCount, setDebounceCount] = React.useState(0);
  const [normalCount, setNormalCount] = React.useState(0);

  const handleDebounceClick = debounce(() => {
    setDebounceCount((prev) => prev + 1);
  }, 500);
  return (
    <div>
        <div>
            <button onClick={() => setNormalCount((prev) => prev + 1)}>Normal Click</button>
            <h1>{normalCount}</h1>
        </div>
        <div>
            <button onClick={handleDebounceClick}>Debounce Click(500ms)</button>
            <h1>{debounceCount}</h1>
        </div>
    </div>
  )
}
