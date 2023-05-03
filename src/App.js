import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketBooking from './pages/TicketBooking';
import Header from './components/homepage/Header';
import Intro from './components/homepage/Intro';
import NowPlaying from './components/homepage/NowPlaying';
import ComingSoon from './components/homepage/ComingSoon';
import Footer from './components/homepage/Footer';
import PilihKursi from './components/pilih-kursi/pilihKursi';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <NowPlaying />
      <ComingSoon />
      <Footer />
      <TicketBooking />
      <PilihKursi />
    </div>
  );
}

export default App;
