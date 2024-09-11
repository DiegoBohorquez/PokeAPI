import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Index from './Views/index';
import Detalle from './Views/Detalle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/pokemon/:id' element={<Detalle/>}></Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default App
