import InputInfo from './components/InputInfo';
import LogReg from './components/LogReg';
import ChartApp from './components/ChartApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

function App(){
return (
  <Router forceRefresh={true}>
    <div className='App'>
      <NavBar />
      <div className='Main'>
        <Switch>
          <Route exact path="/"> 
            <LogReg />
          </Route>
          <Route exact path="/input"> 
            <InputInfo />
          </Route>
          <Route exact path="/charts"> 
            <ChartApp />
          </Route>
        </Switch>
      </div>
    </div>
 </Router>
);
}

export default App;