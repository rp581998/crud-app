
import React from 'react'; 
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {UserDetails, userDetails} from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <Home />
      <AddUser />
      <UserDetails />
    </div>
  );
}

export default App;
