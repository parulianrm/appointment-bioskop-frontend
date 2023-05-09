import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketBooking from './pages/TicketBooking';
import PickSeat from './components/pick-seat/PickSeat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/homepage/Header';
import DashboardAdminPage from './pages/DashboardAdminPage';
import { OrderProvider } from './context/orderContext';
import ProtectedRoute from './pages/utils/ProtectedRoute';
import ForbiddenPage from './pages/ForbiddenPage';
import UpdateAdminSection from './components/dashboard-admin/UpdateAdminSection';

function App() {
  return (
    <div className="App">
      <OrderProvider>
        <Header />
        <Routes>
          <Route path="/forbidden-page" element={<ForbiddenPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/book-ticket/*">
            <Route path=":id" element={<TicketBooking />} />
          </Route>
          <Route
            path="/pick-seat"
            element={
              <ProtectedRoute>
                <PickSeat />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<DashboardAdminPage />} />
          <Route path="/update-booking/*">
            <Route path=":id" element={<UpdateAdminSection />} />
          </Route>
        </Routes>
      </OrderProvider>
    </div>
  );
}

export default App;
