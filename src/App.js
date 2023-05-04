import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketBooking from './pages/TicketBooking';
import PickSeat from './components/pick-seat/PickSeat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/homepage/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-ticket" element={<TicketBooking />} />
        <Route path="/pick-seat" element={<PickSeat />} />
      </Routes>
    </div>
  );
}

export default App;
