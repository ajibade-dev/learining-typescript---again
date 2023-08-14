import React from 'react';
import Greet from './components/Greet';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Heading from './components/Heading';
import Status from './components/Status';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import Counter from './components/state/Counter';


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
      <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
      <Heading>Oscar goes to Leonardo Davinci</Heading>
      </Oscar>    
      <Button handleClick={(event, id) => {
        console.log('Button CLicked', event, id)
      }}/>
      <Input value="" handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem'}} />
      <LoggedIn />
      <Counter />
        </div>
  );
}

export default App;
