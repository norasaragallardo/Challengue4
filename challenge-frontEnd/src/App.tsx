import ResponsiveAppBar from "./components/molecules/BasicModal/BasicModal"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categoria from './pages/categoriaPage/categorias';

function App() {

  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Categoria/>} />  
          <Route path='/categoria' element={<Categoria/>} /> 
        
        </Routes>
    
        
        
      </div>
    </Router>
  )
}

export default App
