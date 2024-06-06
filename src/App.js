import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [contacts,setContacts] = useState([]);
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");

  function add(e){
    e.preventDefault();

    setContacts([...contacts,{name:name,number:number}]);
    setName("");
    setNumber("");
  }
  return (
    <div className="App">
        <h1>Contact List</h1>
        <form onSubmit={add}>
          <input type="text" placeholder="Enter name" onChange={(event) =>{setName(event.target.value)}} value={name}/>
          <input type="number" placeholder="Enter number" onChange={(event) =>{setNumber(event.target.value)}} value={number}/>
          <input type="submit"/>
        </form>
        <ul>
          {contacts.map((contact,index)=>
            <li key={index}>
              Name - {contact.name} 
              Number - {contact.number}
            </li>
          )}
        </ul>
    </div>
  );
}

export default App;
