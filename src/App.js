import './assets/scss/style.scss'
//components
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
//router
import { Route, Routes } from "react-router-dom";
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
