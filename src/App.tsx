import React from 'react';
import Greet from './components/Greet';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
const personName = {
  first: 'Paul',
  last: 'Ajibade'
}

const nameList = [
  {
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Paul',
    last: 'Ajibade'
  },
]

  return (
    <div className="App">
      <Greet 
      name='Vishwas'
      messageCount={20}
      isLoggedIn={false}
      />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
