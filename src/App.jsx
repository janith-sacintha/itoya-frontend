import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import Header from './components/header'
import AdminPage from './pages/adminPage'
import RegisterPage from './pages/registerPage'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col'>
        <Routes path="/">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
