import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import AddTask from './pages/AddTask'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddTask />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;