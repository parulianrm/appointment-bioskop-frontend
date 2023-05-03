import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketBooking from './pages/TicketBooking';
import Header from './components/homepage/Header';
import Intro from './components/homepage/Intro';
import NowPlaying from './components/homepage/NowPlaying';
import ComingSoon from './components/homepage/ComingSoon';
import Footer from './components/homepage/Footer';
import PickSeat from './components/pick-seat/PickSeat';


function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <NowPlaying />
      <ComingSoon />
      <Footer />
      <TicketBooking />
      <PickSeat />
    </div>
  );
}

export default App;
