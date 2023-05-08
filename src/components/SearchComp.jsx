import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSearch} inline>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default Search;
