
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categorias from './components/Categorias'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting= "Sean bienvenidos al lugar donde podes encontrar lo que quieras al crochet"/>}/>
        <Route exact path='/' element={<ItemDetailContainer />}></Route>
        <Route exact path='categorias/:tipo' element={<Categorias/>}></Route>
        {/*<Route exact path='/' element={<ItemCount />}></Route>*/}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
