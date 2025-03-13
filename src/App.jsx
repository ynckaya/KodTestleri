import { Switch, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';


function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/main">
        <Main />
      </Route>
      <Route exact path="/error">
      <h1>Error Page 2</h1>
      </Route>
    </Switch>
  )
}

export default App
