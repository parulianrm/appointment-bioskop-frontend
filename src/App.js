import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketBooking from './pages/TicketBooking';
import PickSeat from './components/pick-seat/PickSeat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/homepage/Header';
import DashboardAdminPage from './pages/DashboardAdminPage';
import { useState } from 'react';
import { OrderProvider } from './context/orderContext';

function App() {
  return (
    <div className="App">
      <OrderProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-ticket/*">
            <Route path=":id" element={<TicketBooking />} />
          </Route>
          <Route path="/pick-seat" element={<PickSeat />} />
          <Route path="/admin" element={<DashboardAdminPage />} />
        </Routes>
      </OrderProvider>
    </div>
  );
}

export default App;
