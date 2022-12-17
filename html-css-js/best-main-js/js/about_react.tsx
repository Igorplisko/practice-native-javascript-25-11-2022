import React, { createElement as element, useState } from 'react';

function App() {
 const [count, setCount ] =  useState(0)

  // console.log() //!return React.createElement('h1', {}, 'Hello, Igor' )
  
  
  return element('div', { className: 'container' }, [
    element('h1', { className: 'font-bold', key: 1 }, `lok at this ${count}`),
    element(
      'button',
      {
        className: 'py-2 px-4 border',
        key: 2,
        onClick: () => setCount(count +1),
      },
      'Click me'
    ),
  ]);
}

export default App;
