import ComingSoon from '../components/homepage/ComingSoon';
import Footer from '../components/homepage/Footer';
import Intro from '../components/homepage/Intro';
import NowPlaying from '../components/homepage/NowPlaying';

export default function HomePage() {
  return (
    <>
      <Intro />
      <NowPlaying />
      <ComingSoon />
      <Footer />
    </>
  );
}
