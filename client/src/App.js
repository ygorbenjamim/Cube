import Header from './components/Header';
import Home from './components/Home';
import CallList from './components/CallList';
import Dashboard from './components/Dashboard';
import Subsector from './components/Subsector';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/dashboard' component={ Dashboard } />
        <Route path='/subsector-ti' render={ () => <Subsector sector='TI'/> } />
        <Route path='/subsector-financial' render={ () => <Subsector sector='Financeiro'/> } />
        <Route path='/subsector-supervisor' render={ () => <Subsector sector='Fiscal'/> } />
        <Route path='/subsector-bi' render={ () => <Subsector sector='BI'/> } />
        <Route path='/subsector-purchases' render={ () => <Subsector sector='Compras'/> } />
        <Route path='/subsector-sales' render={ () => <Subsector sector='Vendas'/> } />
        <Route path='/subsector-marketing' render={ () => <Subsector sector='Marketing'/> } />
        <Route path='/subsector-logistics' render={ () => <Subsector sector='Logística'/> } />
        <Route path='/subsector-commercial' render={ () => <Subsector sector='Comercial'/> } />
        <Route path='/calllist' render={ () => <CallList title='Meus atendimentos'/> }/>
        <Route path='/' component={ Home } />
      </Switch>
      <Footer />
      <Notification />
    </>
  );
}

export default App;
