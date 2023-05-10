// import ComingSoon from '../components/homepage/ComingSoon';
// import Footer from '../components/homepage/Footer';
import { useLocation } from 'react-router-dom';
import Intro from '../components/homepage/Intro';
// import NowPlaying from '../components/homepage/NowPlaying';
import MovieList from '../components/homepage/movieList';
import { Button, FormControl, Modal } from 'react-bootstrap';
import ModalComponent from '../components/ModalComp';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [dataOrder, setDataOrder] = useState('');
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.modal?.show) {
      setDataOrder(location.state?.modal.orderData);
      handleShow();
    }
  }, [location]);
  return (
    <>
      <ModalComponent handleClose={handleClose} showModal={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Membuat Order Berhasil</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <b className="mb-2 d-block weight-bold">
            Order ID Anda : {dataOrder?.data?.id}
            <span> (catat id ini)</span>
          </b>
          <span className="mb-2 d-block">
            Nama Film : {dataOrder?.data?.nama_film}
          </span>
          <span className="mb-2 d-block">
            Nama Studio : {dataOrder?.data?.nama_studio}
          </span>
          <span className="mb-2 d-block">
            Status Payment : {dataOrder?.data?.statusPayment}
          </span>
          <span className="mb-2 d-block">
            Kursi Terdaftar : {dataOrder?.data?.kursi}
          </span>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </ModalComponent>
      {/* <Intro /> 
      <NowPlaying />
      <ComingSoon />
      <Footer /> */}
      <Intro />
      <MovieList />
    </>
  );
}
