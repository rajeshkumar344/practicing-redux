import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import { Route, Routes } from 'react-router-dom';
import Viewcart from './components/Viewcart';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <Routes>
        <Route path='/' element={ <Items/>}/>
        <Route path='/view' element={<Viewcart/>}/>
      </Routes>
    </div>
  );
}

export default App;
