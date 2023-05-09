import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchRow({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get('search');
    onSearch(searchQuery);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <FormControl
        type="text"
        name="search"
        placeholder="Search"
        aria-label="Search"
        style={{ marginRight: '8px' }}
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}
