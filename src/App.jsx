
import { ToastContainer } from 'react-toastify';
import {Routes , Route} from 'react-router-dom'
import axios from 'axios'
import Layout from './pages/Layout';
import IndexPage from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
// import PlacesPage from './pages/PlacesPage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';



axios.defaults.baseURL = 'https://airbnb-node-js.vercel.app'


const App = () => {

  return (
    <>
      <ToastContainer theme='colored' />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/account" element={<ProfilePage/>} />
          <Route path="/account/places" element={<PlacesPage/>}/>
          <Route path="/account/places/new" element={<PlacesFormPage/>}/>
          <Route path="/account/places/:id" element={<PlacesFormPage/>}/>
          <Route path="/place/:id" element={<PlacesPage/>} />
          <Route path="/account/bookings" element={<BookingsPage/>}/>
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App