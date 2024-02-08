import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddProduct/>} />
          <Route path='/view' element={<ViewProduct/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
