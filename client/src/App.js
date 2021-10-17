import Header from './components/Header';
import Home from './components/Home';
import MyCalls from './components/MyCalls';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/mycalls' component={ MyCalls } />
        <Route path='/' component={ Home } />
      </Switch>
      <Footer />
      <Notification />
    </>
  );
}

export default App;
