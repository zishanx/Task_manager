import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddTask from './pages/AddTask'

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div className="app"></div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<AddTask />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;