import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Auth/Login';
import { Toaster } from 'react-hot-toast';
import SignUp from './pages/Auth/SignUp';

const App = () => {
  return (
    <div className='w-full min-h-screen h-screen'>
        <Routes>
            <Route path='/auth'>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
            </Route>
        </Routes>
        <Toaster />
    </div>
  )
}

export default App