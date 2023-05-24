import './App.css';
import { HomePage } from './HomePage.js'
import { Routes, Route } from "react-router-dom";
import { BookingPage } from './Booking.js'

function App() {
  return (
  <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
  </Routes>
  );
}

export default App;
