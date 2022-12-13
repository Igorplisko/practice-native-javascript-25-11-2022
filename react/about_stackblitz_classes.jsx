//! App.js
import React from 'react';
import List from './List';
import './style.css';

export default function App() {
  const [visibleList, setVisibleList] = React.useState(true);

const toggleVisibleList = () => {
  setVisibleList(justVisible => !justVisible)
}

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

class List extends React.Component {
  state = {
    numbers: [1, 2, 3],
  };

  addRandomNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    this.setState({
      numbers: [...this.state.numbers, randNumber],
    });
  };
  
  componentDidMount() {
    console.log('The component has been rendered');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log({prevProps, prevState, nextProps:this.props, nextState:this.state});
    if (this.state.numbers.length !== prevState.numbers.lenghth){
      console.log('The list of numbers has been updated!')
    }
  }

  componentWillUnmount () {
  console.log('Component has been removed')
}

  render() {
    return (
      <>
        <ul>
          {this.state.numbers.map((oneNumber, index) => (
            <li key={index}>{oneNumber}</li>
          ))}
        </ul>
        <button onClick={this.addRandomNumber}>New number</button>
      </>
    );
  }
}

export default List;

//------------------------------------
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
