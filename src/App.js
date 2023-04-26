import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}


function ExternalUser(){
  const [users,setUsers] = useState([]);
  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    // .then(data => console.log(data))
    .then(data => setUsers(data))
  }, []);
return(
<div>

<h1>External User: </h1>
<p>{users.length}</p>
{
  // users.map(user => <li>{user.name}</li>)
  users.map(user => <User name={user.name} email={user.email}></User>)
}
</div>
 

);


}

function User(props){

  return(
    <div style={ { border:"3px solid blue", margin:"20px" } }>
      <h3>Name: {props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}

export default App;
