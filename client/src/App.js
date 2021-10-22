import Header from './components/Header';
import Home from './components/Home';
import CallList from './components/CallList';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/dashboard' component={ Dashboard } />
        <Route path='/calllist' render={ () => <CallList title='Meus atendimentos'/> }/>
        <Route path='/' component={ Home } />
      </Switch>
      <Footer />
      <Notification />
    </>
  );
}

export default App;
