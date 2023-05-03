import { Container } from 'react-bootstrap';
import DescriptionSection from '../components/ticket-booking/DescriptionSection';
import PickDateSection from '../components/ticket-booking/PickDateSection';
import PickOptionSection from '../components/ticket-booking/PickOptionSection';

export default function TicketBooking() {
  return (
    <Container>
      <DescriptionSection />
      <PickDateSection />
      <PickOptionSection />
    </Container>
  );
}
