import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideogameDetail from './componentes/container/VideogameDetail';
import Landing from './componentes/container/Landing';
import VideogameCreate from './componentes/container/VideogameCreate';
import Home from './componentes/container/Home';

function App() {
  return (
    < BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/videogameCreate" component={VideogameCreate} />
          <Route exact path="/videogame/:id" component={VideogameDetail} />
        </Switch>
      </div>
    </ BrowserRouter>

  );
}

export default App;

