import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddProduct/>} />
          <Route path='/view' element={<ViewProduct/>} />
          <Route path='/search' element={<SearchProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
