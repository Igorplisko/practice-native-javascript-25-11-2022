//! App.js
import React from 'react';
import List from './List';
import './style.css';

export default function App() {
  const [visibleList, setVisibleList] = React.useState(true);

  const toggleVisibleList = () => {
    setVisibleList((justVisible) => !justVisible);
  };

  return (
    <div className="App">
      {visibleList && <List />}
      <button onClick={toggleVisibleList}> Show / hide list</button>
    </div>
  );
}

//___________________________________________________

//! List.jsx

import React from 'react';

const List = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);
  const [count, setCount] = React.useState(0);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArray = [...numbers, randNumber];
    setNumbers(newArray);
    // console.log(newArray);
  };

  //componentDidUpdate (only for count)
  React.useEffect(() => {
    console.log('COUNT have been updated!');
  }, [count]);

  //componentDidUpdate (only for numbers)
  React.useEffect(() => {
    console.log('NUMBERS have been updated!');
  }, [numbers]);

  // componentDidUpdate (all)
  React.useEffect(() => {
    console.log('ALL component have been updated!');
  });

  // componentDidMount + componentWillUnmount
  React.useEffect(() => {
    console.log('Component has been rendered');
    return () => {
      console.log('Component has been removed');
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ul>
        {numbers.map((oneNumber, index) => (
          <li key={index}>{oneNumber}</li>
        ))}
      </ul>
      <button onClick={addNumber}>New number</button>
    </>
  );
};
// export default List;

//-------------------------------------------------

// h1,
// p {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }

// * {
//   padding: 0;
//   margin: 0;
//   list-style: none;
// }

// ul {
//   margin-bottom: 10px;
// }

// ul li {
//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//   padding: 5px;
// }

// .App {
//   margin: 20px;
// }
