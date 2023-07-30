import React  from 'react'
import {Route , Switch} from 'react-router-dom'
import './App.css';
import Dachbord from './layout/layoutofcomponent/dachbord.js';
import Connection from './layout/component/connection/connection.js'
import Inscrie from './layout/component/connection/inscrie.js'
import messanger from './layout/component/messanger/message.js'
import Client from './layout/layoutofcomponent/client.js'
import Produit from './layout/layoutofcomponent/produit.js'

function App() {

  return (
    <div className="App">
      <Switch>
      <Route path='/' component={Dachbord} exact />
      <Route path='/Connection' component={Connection} />
      <Route path='/Inscrie' component={Inscrie} />
      <Route path='/Client' component={Client} />
      <Route path='/Produit' component={Produit} />
      
      </Switch>

    </div>
  );
}

export default App;
